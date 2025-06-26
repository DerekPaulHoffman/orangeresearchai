import { Router, Request, Response } from 'express';
import { z } from 'zod';

const router = Router();

// Health check schema
const HealthCheckSchema = z.object({
  timestamp: z.string(),
  status: z.literal('healthy'),
  uptime: z.number(),
  memory: z.object({
    used: z.number(),
    total: z.number()
  })
});

type HealthCheck = z.infer<typeof HealthCheckSchema>;

// Health check endpoint
router.get('/', (_req: Request, res: Response) => {
  const healthData: HealthCheck = {
    timestamp: new Date().toISOString(),
    status: 'healthy',
    uptime: process.uptime(),
    memory: {
      used: process.memoryUsage().heapUsed,
      total: process.memoryUsage().heapTotal
    }
  };

  // Validate with Zod
  const validated = HealthCheckSchema.parse(healthData);
  
  res.json(validated);
});

export { router as healthRouter }; 