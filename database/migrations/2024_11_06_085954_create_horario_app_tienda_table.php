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
        Schema::create('horario_app_tienda', function (Blueprint $table) {
            $table->id();
            $table->integer('app_tienda_id')->default(0);
            $table->string('dia', 1);
            $table->string('start', 6);
            $table->string('end', 6);
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
        Schema::dropIfExists('horario_app_tienda');
    }
};
