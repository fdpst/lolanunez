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
        Schema::table('app_usuario', function (Blueprint $table) {
            if (!Schema::hasColumn('app_usuario', 'ciudad')) {
                $table->string('ciudad', 100)->after('direccion')->nullable();
            }
            if (!Schema::hasColumn('app_usuario', 'pais')) {
                $table->string('pais', 100)->after('ciudad')->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('app_usuario', function (Blueprint $table) {
            if (Schema::hasColumn('app_usuario', 'ciudad')) {
                $table->dropColumn('ciudad');
            }
            if (Schema::hasColumn('app_usuario', 'pais')) {
                $table->dropColumn('pais');
            }
        });
    }
};
