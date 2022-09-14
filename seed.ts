import { PrismaClient as activityDB } from "./generated/activity-db";
import { PrismaClient as organizationDb } from "./generated/organization-db";
import { PrismaClient as personDb } from "./generated/person-db";
import { randCompanyName, randWord, randEmail, randFirstName, randLastName, randSports, randPassword, randPhoneNumber } from '@ngneat/falso';

const client = {
  activity: new activityDB(),
  organization: new organizationDb(),
  person: new personDb(),
};

const count = {
  organizations: 10,
  people: 5,
  activities: 5,
};

const seed = async () => {
  const now = new Date();
  let data, organization, person, activity;
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
      console.log(`person: ${person.username}`)
    } // end people loop
    for (let a = 0; a < count.activities; a++) {
      data = {
        name: randSports(),
        organization_id: organization.id,
        created_at: now,
        updated_at: now,
      };
      activity = await client.activity.activity.create({ data });
      console.log(`activity: ${activity.name}`)
    } // end activity loop
  } // end organization loop
};

seed();
