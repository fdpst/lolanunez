<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PromocionRequest extends FormRequest
{
  public function authorize(){
      return true;
  }

  public function rules()
  {
      return [
        'nombre' => 'required|max:120',
        'file_name' => 'required',
      ];
  }

  public function messages()
  {
      return [
        'nombre.required' => 'Nombre es obligatorio',
        'file_name.required' => 'El archivo es obligatorio'
      ];
  }
}
