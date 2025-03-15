<?php

namespace App\Http\Controllers\Project;

use App\Models\Workflow;
use Inertia\Inertia;

class EditorController {
    public function __invoke(Workflow $workflow) {
        return Inertia::render('dashboardpages/workflows/editorWorkflow',[
            'workflow' =>  $workflow->load('project')
        ]);
    }
}