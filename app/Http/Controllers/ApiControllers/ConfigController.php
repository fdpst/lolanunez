<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Config;
use App\ModelsApp\AppTienda;
use Illuminate\Support\Facades\Storage;

class ConfigController extends Controller
{
    public function getConfig(){
      $configs = Config::get()->first();
      $tiendas = AppTienda::get(['id', 'nombre']);

      return response()->json([
        'config'  => $configs,
        'tiendas' => $tiendas
      ], 200);
    }

    public function getPaymentConfig(){
      return response()->json(Config::get(['activo', 'color', 'logo', 'tienda_id'])->first(), 200);
    }

    public function saveConfig(Request $request){
      $config = Config::updateOrCreate(['id' => $request->id], $request->all());
      return response()->json($config, 200);
    }

    public function saveImagen(Request $request)
    {
        // Validate the uploaded file
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust the validation rules as needed
        ]);

        // Get the uploaded file
        $image = $request->file('image');

        // Generate a unique filename for the image
        $filename = 'imagen_inicio.png';

        // Store the image in the public/imagen directory
        $image->storeAs('public/imagen', $filename);

        // You can also store the image path in the database if needed
        // Example: $imagePath = 'public/imagen/' . $filename;

        // Return a response or redirect as needed
        return Response('Imagen guardada con exito');
    }

    public function getBlob()
    {
        // Define the file path (assuming the image is stored as imagen_inicio.png)
        $filePath = 'public/imagen/imagen_inicio.png';

        // Check if the file exists
        if (Storage::exists($filePath)) {
            // Get the contents of the file as a binary string
            $fileContents = Storage::get($filePath);

            // Set the appropriate content type for the image (in this case, image/png)
            $headers = [
                'Content-Type' => 'image/png',
            ];

            // Return the image with the headers
            return response($fileContents, 200, $headers);
        }
        return null;
    }
}
