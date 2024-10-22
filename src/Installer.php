<?php

namespace Metadrop\BackstopjsAddons;

use Composer\Script\Event;

/**
 * Composer scripts for the BackstopJS Addons during installation.
 */
class Installer {

  /**
   * Move the BackstopJS Addons files to the tests folder.
   *
   * @param \Composer\Script\Event $event
   *   The Composer event.
   */
  public static function MoveFiles(Event $event) {
    $composer = $event->getComposer();

    $source = $composer->getConfig()->get('vendor-dir') . '/metadrop/backstopjs-addons/addons';
    $root = $composer->getConfig()->get('vendor-dir') . '/..';
    $destination = $root . '/tests/backstopjs/common/libraries/backstopjs-addons';

    if (is_dir($destination)) {
      self::deleteDirectoryContents($source, $destination);
    } else {
      mkdir($destination, 0755, TRUE);
    }

    self::copyFiles($source, $destination);
  }

  /**
   * Copy files from source to destination.
   *
   * @param string $source
   *   The source folder.
   * @param string $destination
   *   The destination folder.
   */
  private static function copyFiles($source, $destination) {
    $files = scandir($source);
    foreach ($files as $file) {
      if ($file == '.' || $file == '..') {
        continue;
      }
      if (is_dir($source . '/' . $file)) {
        mkdir($destination . '/' . $file);
        self::copyFiles($source . '/' . $file, $destination . '/' . $file);
      }
      else {
        copy($source . '/' . $file, $destination . '/' . $file);
      }
    }
  }

  /**
   * Delete directory content.
   *
   * @param string $dir
   *   The destination folder.
   */
  private static function deleteDirectoryContents($dir) {
    $files = array_diff(scandir($dir), array('.', '..'));
    foreach ($files as $file) {
      $filePath = $dir . '/' . $file;
      if (is_dir($filePath)) {
        self::deleteDirectoryContents($filePath);
        rmdir($filePath);
      } else {
        unlink($filePath);
      }
    }
  }

}