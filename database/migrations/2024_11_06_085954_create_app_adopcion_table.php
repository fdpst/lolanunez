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
        Schema::create('app_adopcion', function (Blueprint $table) {
            $table->id();
            $table->integer('id_tienda');
            $table->integer('id_mascota');
            $table->integer('id_donante');
            $table->integer('id_adoptante');
            $table->string('fecha_donacion', 10);
            $table->string('fecha_adopcion', 10);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('app_adopcion');
    }
};
