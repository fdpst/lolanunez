<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EjemplarRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
                'tienda_id' => 'required',
                'imagen' => 'required',
                'titulo' => 'required',
                'fecha' => 'required|date',
                'descripcion' => 'required',
            ];
    }

    public function messages()
    {
        return [
            'tienda_id.required' => 'La tienda es obligatorio',
            'imagen.required' => 'La imagen es obligatorio',
            'titulo.required' => 'El titulo es obligatorio',
            'fecha.required' => 'La fecha es obligatorio',
            'fecha.date' => 'La fecha debe tener el formato correcto',
            'descripcion.required' => 'La descripcion es obligatorio',
        ];
    }
}
