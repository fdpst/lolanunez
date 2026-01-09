<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Solicitud;

class SolicitudController extends Controller
{
  public function getSolicitudes(){
    $solicitudes = Solicitud::with('seccion')->orderBy('created_at', 'DESC')->get();
    return response()->json(['solicitudes' => $solicitudes], 200);
  }
}
