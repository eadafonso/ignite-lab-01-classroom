import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';

import { DatabaseModule } from 'src/database/database.module';
import { CoursesService } from 'src/services/courses.service';
import { EnrollmentsService } from 'src/services/enrollments.service';
import { StudentsService } from 'src/services/students.service';
import { CourseResolver } from './graphql/resolvers/courses.resolver';
import { EnrollmentResolver } from './graphql/resolvers/enrollments.resolver';
import { StudentsResolver } from './graphql/resolvers/students.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    //Resolvers
    CourseResolver,
    EnrollmentResolver,
    StudentsResolver,

    //Service
    CoursesService,
    EnrollmentsService,
    StudentsService,
  ],
})
export class HttpModule {}
