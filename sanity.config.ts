'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { structure, defaultDocumentNode } from './src/sanity/structure'
import { Logo } from './src/sanity/components/Logo'

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    title: 'PP Diniz Studio',

    // Schema
    schema,

    // Branding
    icon: Logo,

    // Tools
    plugins: [
        structureTool({
            structure,
            defaultDocumentNode,
        }),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion }),
    ],
})
