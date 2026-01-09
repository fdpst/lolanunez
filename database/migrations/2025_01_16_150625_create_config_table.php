<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (!Schema::hasTable('config')) {
            Schema::create('config', function (Blueprint $table) {
                $table->id();
                $table->boolean('activo')->nulable();
                $table->text('stripe_key')->nullable();
                $table->text('stripe_secret')->nullable();
                $table->integer('tienda_id')->nullable();
                $table->binary('logo')->nullable();
                $table->string('color')->nullable();
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('config');
    }
};
