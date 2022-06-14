export const deleteSurveysPath = {
  delete: {
    parameters: [{
      in: 'header',
      name: 'x-access-token',
      required: true,
      schema: {
        type: 'string'
      }
    },
    {
      in: 'path',
      name: 'surveyId',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    security: [{
      apiKeyAuth: []
    }],
    tags: ['Survey'],
    summary: 'API for delete a survey',
    responses: {
      204: {
        description: 'Success'
      },
      403: {
        $ref: '#/components/forbidden'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/unauthorized'
      }
    }
  }
}
