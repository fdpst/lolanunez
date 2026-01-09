<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\VideoRequest;
use Illuminate\Http\Request;
use App\Models\Video;
use Storage;
use File;

class VideoController extends Controller
{
  public function getAllVideos(){
    $videos = Video::orderBy('created_at', 'DESC')->get();
    return response()->json($videos, 200);
  }

  public function getVideoById($video_id){
    return response()->json(Video::find($video_id), 200);
  }

  public function changeVideoActive($video_id){
    $video = Video::find($video_id);
    $video->active = !$video->active;
    $video->save();
    return response()->json('Estado actualizado', 200);
  }

  public function deleteVideo($video_id){
    $video = Video::find($video_id);
    if(Storage::disk('videos')->exists($video->file_name)){
       Storage::disk('videos')->delete($video->file_name);
    }
    $video->delete();
    return response()->json('Video eliminado', 200);
  }

  public function saveVideo(VideoRequest $request){
    $old_file = null;

    $video = Video::find($request->id);

    if($video){
      $old_file = $video->file_name;
    }

    $has_video = (File::isFile($request->file_name)) ? true : false;

    $video = Video::updateOrCreate(['id' => $request->id], $request->except(['video_name', 'path']));

    if($old_file && $has_video){
      if(Storage::disk('videos')->exists($video->file_name) && Storage::disk('videos')->exists($old_file)){
         Storage::disk('videos')->delete($old_file);
      }
    }

    return response()->json($video, 200);
  }
}
