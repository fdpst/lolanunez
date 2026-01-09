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
        Schema::create('app_empleado', function (Blueprint $table) {
            $table->id();
            $table->integer('tipo_id');
            $table->string('nombre', 100);
            $table->string('email', 100);
            $table->string('telefono', 80)->nullable();
            $table->string('color', 300);
            $table->string('entrada', 5)->default('00:00');
            $table->string('salida', 5)->default('00:00');
            $table->boolean('is_active');
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
        Schema::dropIfExists('app_empleado');
    }
};
