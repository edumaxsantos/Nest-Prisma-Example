# Migration `20200813122254-migration`

This migration has been generated by Eduardo M. C. Santos at 8/13/2020, 9:22:54 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Post" DROP CONSTRAINT "Post_authorid_fkey"

DROP TABLE "public"."Post";

DROP TABLE "public"."User";
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200813122254-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,11 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
```


