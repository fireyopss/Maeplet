<?php

namespace App\Http\Controllers;

use App\Http\Requests\WorkflowCreatedRequest;
use App\Models\Workflow;
use Illuminate\Http\Request;

class WorkflowController extends Controller
{
    public function createWorkflow(WorkflowCreatedRequest $request) {
        dd($request->all());
        // Create a new workflow
        $wfid = Workflow::create(array_merge($request->validated(), ['user_id' => auth()->id()]));

        //redirect back to the page with a success message
        return redirect()->back()->with('success', 'Workflow created successfully');
    }
}
