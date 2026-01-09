<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Storage;
use File;

class Video extends Model
{
    protected $table = 'video';

    protected $fillable = ['nombre', 'file_name', 'active'];

    protected $casts = [
        'active' => 'boolean',
    ];

    protected $appends = ['video_name', 'path'];

    public function getPathAttribute(){
       return asset('storage/videos/' . $this->file_name);
    }

    public function getVideoNameAttribute(){
      return substr($this->file_name, strpos($this->file_name, '-') + 1);
    }

    public function setActiveAttribute($active){
      $this->attributes['active'] = ($active == 'true') ? 1 : 0;
    }

    public function setFileNameAttribute($video){
      if(!$video || !File::isFile($video)){
    		return null;
    	}
    	$file_name = uniqid() . '-' . $video->getClientOriginalName();
      Storage::disk('videos')->put($file_name,  File::get($video));
    	$this->attributes['file_name'] = $file_name;
    }
}
