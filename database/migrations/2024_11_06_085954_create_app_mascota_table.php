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
        Schema::create('app_mascota', function (Blueprint $table) {
            $table->id();
            $table->integer('app_usuario_id');
            $table->string('nombre', 80);
            $table->string('Fecha_Nacimiento', 10)->nullable();
            $table->string('raza', 50)->nullable();
            $table->string('sexo', 20)->nullable();
            $table->string('tamanyo', 20)->nullable();
            $table->double('peso', 11, 2)->nullable();
            $table->string('color', 20)->nullable();
            $table->tinyInteger('adoptable')->default(0);
            $table->integer('seccion_id');
            $table->string('imagen');
            $table->string('observaciones', 200)->nullable();
            $table->integer('codigo')->nullable();
            $table->tinyInteger('pelo')->default(0);
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
        Schema::dropIfExists('app_mascota');
    }
};
