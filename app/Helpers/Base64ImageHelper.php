<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class Base64ImageHelper {

	public function createImageFromBase($img, $name){
  		if (!$this->isBase64($img)){
          return false;
  		}

  		$parts = explode(',', $img);

  		return [
        'file_name' => uniqid() . '_' . $name . '.' .  $this->getExtension($parts[0]),
        'image' 		=> base64_decode($parts[1])
      ];
  	}

  	private function getExtension($data){
		    return explode('/', explode(':', substr($data, 0, strpos($data, ';')))[1])[1];
  	}

  	private function createFileName($extension){
		    return Carbon::now()->timestamp . '_' . uniqid() . '.' . $extension;
    }

	  private function isBase64($a){
		   return strpos($a, 'base64') !== false;
	  }

  	public function deleteFileFromDisk($disk_name, $file_name){
  		if(Storage::disk($disk_name)->exists($file_name)){
  			 Storage::disk($disk_name)->delete($file_name);
  		}
  	}
}
