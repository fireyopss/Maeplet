<?php
namespace App\Http\Controllers\Project;

use App\Actions\Project\CreateAction;
use App\DTO\ProjectDTO;
use App\Http\Requests\StoreProjectRequest;

class CreateController {
    public function __invoke(StoreProjectRequest $request, CreateAction $action)
    {
        $dto = new ProjectDTO(...$request->safe());      
        
        $action->execute($dto);
        

        //go to home page
        return redirect()->route('dashboard.projects');
    }
}