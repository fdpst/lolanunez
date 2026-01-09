<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class CheckPassword implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function passes($attribute, $value){
        return (strlen($value) < 8 || strlen($value) > 20 || !preg_match("#[0-9]+#", $value) || !preg_match("#[a-zA-Z]+#", $value));
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message(){
        return 'The :attribute coso?';
    }
}
