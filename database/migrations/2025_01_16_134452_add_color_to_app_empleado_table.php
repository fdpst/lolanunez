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
        Schema::table('app_empleado', function (Blueprint $table) {
            if (!Schema::hasColumn('app_empleado', 'color')) {
                $table->string('color', 100)->after('telefono')->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('app_empleado', function (Blueprint $table) {
            if (Schema::hasColumn('app_empleado', 'color')) {
                $table->dropColumn('color');
            }
        });
    }
};
