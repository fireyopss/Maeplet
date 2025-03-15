<?php
namespace App\Http\Controllers\Project;

use App\Models\Project;
use Inertia\Inertia;

class EditControllerIndex {
    public function __invoke(Project $project) {
        return Inertia::render('dashboardpages/projects/editProject',[
            'project' => $project->load('workflows')
        ]);
    }
}