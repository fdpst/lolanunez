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
        Schema::create('app_ejemplar', function (Blueprint $table) {
            $table->id();
            $table->integer('tienda_id');
            $table->string('imagen');
            $table->string('titulo', 80);
            $table->date('fecha');
            $table->string('descripcion', 200);
            $table->tinyInteger('activo')->default(1);
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
        Schema::dropIfExists('app_ejemplar');
    }
};
