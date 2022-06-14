export const surveysPath = {
  get: {
    parameters: [{
      in: 'header',
      name: 'x-access-token',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    security: [{
      apiKeyAuth: []
    }],
    tags: ['Survey'],
    summary: 'API for list all surveys',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/surveys'
            }
          }
        }
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
  },
  post: {
    parameters: [{
      in: 'header',
      name: 'x-access-token',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    security: [{
      apiKeyAuth: []
    }],
    tags: ['Survey'],
    summary: 'API for create a survey',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/addSurveyParams'
          }
        }
      }
    },
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
