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
        Schema::create('app_servicio', function (Blueprint $table) {
            $table->id();
            $table->integer('tipo_id')->nullable();
            $table->string('nombre', 60);
            $table->double('precio');
            $table->integer('duracion');
            $table->boolean('is_active')->default(true);
            $table->string('abreviacion', 100)->nullable();
            $table->integer('codigo');
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
        Schema::dropIfExists('app_servicio');
    }
};
