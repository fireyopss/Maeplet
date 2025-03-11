<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

          
        User::create([
            'name' => 'Admin (Tayyab)',
            'email' => 'tayyan54@gmail.com',
            'password' => '$2y$12$cUSgegA2PA9pirEjYdDkUeP54fVNyBSxwNRW6uRXlWZmBUr1lIyUO'
        ]);
    }
}
