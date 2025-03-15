<?php

namespace App\Http\Controllers\Workflow;

use App\Models\Workflow;
use Inertia\Inertia;

class IndexController {
    public function __invoke() {
        return Inertia::render('Dashboard',[
            'workflows' =>  Workflow::ownedByUser()->with('project')->orderBy('created_at', 'desc')->get()
        ]);
    }
}