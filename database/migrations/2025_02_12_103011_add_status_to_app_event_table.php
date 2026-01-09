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
        Schema::table('app_event', function (Blueprint $table) {
            if (!Schema::hasColumn('app_event', 'status')) {
                $table->string('status', 11)->nullable()->after('precio');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('app_event', function (Blueprint $table) {
            $table->dropColumn('status');
        });
    }
};
