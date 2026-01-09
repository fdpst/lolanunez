<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VideoRequest extends FormRequest
{
    public function authorize(){
        return true;
    }

    public function rules()
    {
        return [
          'nombre' => 'required|max:120'
        ];
    }

    public function messages()
    {
        return [
          'nombre.required' => 'Nombre es obligatorio'
        ];
    }
}
