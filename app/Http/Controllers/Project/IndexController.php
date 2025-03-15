<?php

namespace App\Http\Controllers\Project;

use App\Models\Project;
use Inertia\Inertia;

class IndexController {
    public function __invoke() {
        return Inertia::render('Dashboard',[
            'projects' =>  Project::ownedByUser()->orderBy('created_at', 'desc')->with(['workflows'])->get()
        ]);
    }
}