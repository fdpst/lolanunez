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
        Schema::create('empleado_turno', function (Blueprint $table) {
            $table->id();
            $table->integer('empleado_id');
            $table->timestamp('inicio')->nullable();
            $table->timestamp('final')->nullable();
            $table->double('tiempo_trabajo', 8, 2)->nullable();
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
        Schema::dropIfExists('empleado_turno');
    }
};
