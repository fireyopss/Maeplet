<?php
namespace App\Http\Controllers\Workflow;

use App\Actions\Workflow\CreateAction;
use App\DTO\WorkflowDTO;
use App\Http\Requests\WorkflowCreatedRequest;

class CreateController
{
    public function __invoke(WorkflowCreatedRequest $request, CreateAction $action)
    {
        $dto = new WorkflowDTO(...$request->safe());      
        
        $action->execute($dto);
        

        //go to home page
        return redirect()->route('dashboard.workflow');
    }
}