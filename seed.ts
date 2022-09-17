import { PrismaClient as activityDB } from "./generated/activity-db";
import { PrismaClient as organizationDb } from "./generated/organization-db";
import { PrismaClient as personDb } from "./generated/person-db";
import {
  randCompanyName,
  randWord,
  randEmail,
  randFirstName,
  randLastName,
  randSports,
  randPassword,
  randPhoneNumber,
  randBoolean,
  randNumber,
  randCatchPhrase,
  randState,
  randPhrase,
} from "@ngneat/falso";

const client = {
  activity: new activityDB(),
  organization: new organizationDb(),
  person: new personDb(),
};

const count = {
  organizations: 10,
  people: 5,
  activities: 5,
  awards: 3,
  questions: 2,
};

const clear = async () => {
  // delete children before parent due to constraints
  // activity db
  await client.activity.activity.deleteMany({});
  // person db
  await client.person.person.deleteMany({});
  // organizarion db
  await client.organization.award.deleteMany({});
  await client.organization.customQuestion.deleteMany({});
  await client.organization.organization.deleteMany({});
};

const seed = async () => {
  const now = new Date();
  let data, organization, person, activity, award, question;
  for (let o = 0; o < count.organizations; o++) {
    data = {
      name: randCompanyName(),
      subdomain: randWord(),
      phone: randPhoneNumber(),
      fax: randPhoneNumber(),
      created_at: now,
      updated_at: now,
    };
    organization = await client.organization.organization.create({ data });
    console.log(`organization: ${organization.name}`);
    for (let a = 0; a < count.awards; a++) {
      data = {
        organization_id: organization.id,
        name: randCatchPhrase(),
        position: randNumber({ min: 1, max: 1000 }),
        active: randBoolean(),
        created_at: now,
        updated_at: now,
      };
      award = await client.organization.award.create({ data });
      console.log(`award: ${award.name}`);
    } // end award loop
    for (let q = 0; q < count.questions; q++) {
      data = {
        organization_id: organization.id,
        state: randState(),
        question: randPhrase(),
        question_type: randCatchPhrase(),
        question_options: randCatchPhrase(),
        active: randBoolean(),
        required: randBoolean(),
        dependent_on: randNumber({ min: 1, max: 1000 }),
        dependent_answer: randCatchPhrase(),
        sort_order: randNumber({ min: 1, max: 1000 }),
        activity_type: randSports(),
        created_at: now,
        updated_at: now,
      };
      question = await client.organization.customQuestion.create({ data });
      console.log(`custom question: ${question.question}`);
    } // end question loop
    for (let p = 0; p < count.people; p++) {
      data = {
        username: randEmail(),
        password: randPassword(),
        first_name: randFirstName(),
        last_name: randLastName(),
        cell_phone: randPhoneNumber(),
        home_phone: randPhoneNumber(),
        registered_with_organization_id: organization.id,
        created_at: now,
        updated_at: now,
      };
      person = await client.person.person.create({ data });
      console.log(`person: ${person.username}`);
    } // end people loop
    for (let a = 0; a < count.activities; a++) {
      data = {
        name: randSports(),
        organization_id: organization.id,
        created_at: now,
        updated_at: now,
      };
      activity = await client.activity.activity.create({ data });
      console.log(`activity: ${activity.name}`);
    } // end activity loop
  } // end organization loop
};

clear();

seed();
