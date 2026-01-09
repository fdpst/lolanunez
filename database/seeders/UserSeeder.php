<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       User::updateOrCreate(
         ['email' => 'admin@admin.com'],
         [
           'name' => 'admin',
           'email' => 'admin@admin.com',
           'password' => 'admin', // El modelo User tiene un mutator que encripta automáticamente
           'role' => 1,
           'created_at' => Carbon::now(),
           'updated_at' => Carbon::now(),
         ]
       );
    }
}
