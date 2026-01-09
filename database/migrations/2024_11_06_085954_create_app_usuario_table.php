<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app_usuario', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('apellidos')->nullable();
            $table->string('email')->nullable();
            $table->string('telefono')->nullable();
            $table->string('avatar')->nullable();
            $table->text('observaciones')->nullable();
            $table->string('password')->nullable();
            $table->string('profesion', 100)->nullable();
            $table->text('antecedentes')->nullable();
            $table->text('consulta')->nullable();
            $table->text('tratamiento')->nullable();
            $table->string('direccion', 300)->nullable();
            $table->string('ciudad', 100)->nullable();
            $table->string('pais', 100)->nullable();
            $table->tinyInteger('bono')->nullable();
            $table->date('fecha_nacimiento')->nullable();
            $table->string('ejercicio', 200)->nullable();
            $table->string('alergias', 200)->nullable();
            $table->string('dni', 9)->nullable();
            $table->string('firma')->nullable();
            $table->boolean('consentimiento1')->default(false);
            $table->boolean('consentimiento2')->default(false);
            $table->boolean('consentimiento3')->default(false);
            $table->boolean('consentimiento4')->default(false);
            $table->string('pdf')->nullable();
            $table->date('fechafirma')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('app_usuario');
    }
};
