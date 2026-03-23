import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  timestamp,
  json,
  uniqueIndex,
  index,
} from 'drizzle-orm/pg-core';

export const projects = pgTable(
  'projects',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 120 }).notNull(),
    slug: varchar('slug', { length: 140 }).notNull(),
    tagline: varchar('tagline', { length: 200 }),
    description: text('description'),
    websiteUrl: text('website_url'),
    tags: json('tags').$type<string[]>(), 
    voteCount: integer('vote_count').notNull().default(0),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
    approvedAt: timestamp('approved_at', { withTimezone: true }),
    status: varchar('status', { length: 20 }).default('pending'),
    submittedBy: varchar('submitted_by', { length: 120 }).default('anonymous'),
    userId: varchar('user_id', { length: 255 }), 
    organisationId: varchar('organisation_id', { length: 255 }),
  },
  (table) => ({
    slugIdx: uniqueIndex('products_slug_idx').on(table.slug),
    statusIdx: index('products_status_idx').on(table.status),
    organisationIdx: index('products_organisation_idx').on(
      table.organisationId
    ),
  })
)
