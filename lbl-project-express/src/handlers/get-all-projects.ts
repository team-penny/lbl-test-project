import { Request, Response } from 'express';

/**
 * Request handler for retrieving all projects
 */
export async function getAllProjects(request: Request, response: Response): Promise<any> {
    try {
        // TODO: Get the list of projects
        response.json();
    }
    catch (error) {
        console.log(error);
        response.status(500).send('Error retriving projects');
    }
}
