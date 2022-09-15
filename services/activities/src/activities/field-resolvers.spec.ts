import * as F from "./field-resolvers";
import sinon from "sinon";
import { ActivityType } from "./types";

const parent: ActivityType = {
  archived: true,
  id: 123,
  name: "foo bar",
  registerable: false,
  organization_id: 456,
  created_at: new Date(),
  updated_at: new Date(),
  steps: 0,
  fee: 765,
  email_footer: "cordiallly",
  terms_and_conditions: "bar foo",
  kind: "sometimes",
  lead_in_message: "blah blah blah",
  no_cut: false,
  current_season: "Fall",
  discounted_fee: 789,
  spirit_wear_link: "biz baz buz",
  athletic_season: "Winter",
  rosterwebservice_access: false,
};

describe("Activity field resolvers", () => {
  beforeEach(() => {
    sinon.restore();
  });
  it("archived", () => {
    const result = F.get_archived(parent);
    sinon.assert.match(result, parent.archived);
  });
  it("athletic_season", () => {
    const result = F.get_athletic_season(parent);
    sinon.assert.match(result, parent.athletic_season);
  });
  it("created_at", () => {
    const result = F.get_created_at(parent);
    sinon.assert.match(result, parent.created_at.toString());
  });
  it("current_season", () => {
    const result = F.get_current_season(parent);
    sinon.assert.match(result, parent.current_season);
  });
  it("discounted_fee", () => {
    const result = F.get_discounted_fee(parent);
    sinon.assert.match(result, parent.discounted_fee);
  });
  it("email_footer", () => {
    const result = F.get_email_footer(parent);
    sinon.assert.match(result, parent.email_footer);
  });
  it("fee", () => {
    const result = F.get_fee(parent);
    sinon.assert.match(result, parent.fee);
  });
  it("kind", () => {
    const result = F.get_kind(parent);
    sinon.assert.match(result, parent.kind);
  });
  it("lead_in_message", () => {
    const result = F.get_lead_in_message(parent);
    sinon.assert.match(result, parent.lead_in_message);
  });
  it("name", () => {
    const result = F.get_name(parent);
    sinon.assert.match(result, parent.name);
  });
  it("no_cut", () => {
    const result = F.get_no_cut(parent);
    sinon.assert.match(result, parent.no_cut);
  });
  it("organization_id", () => {
    const result = F.get_organization_id(parent);
    sinon.assert.match(result, parent.organization_id);
  });
  it("registerable", () => {
    const result = F.get_registerable(parent);
    sinon.assert.match(result, parent.registerable);
  });
  it("rosterwebservice_access", () => {
    const result = F.get_rosterwebservice_access(parent);
    sinon.assert.match(result, parent.rosterwebservice_access);
  });
  it("spirit_wear_link", () => {
    const result = F.get_spirit_wear_link(parent);
    sinon.assert.match(result, parent.spirit_wear_link);
  });
  it("steps", () => {
    const result = F.get_steps(parent);
    sinon.assert.match(result, parent.steps);
  });
  it("terms_and_conditions", () => {
    const result = F.get_terms_and_conditions(parent);
    sinon.assert.match(result, parent.terms_and_conditions);
  });
  it("updated_at", () => {
    const result = F.get_updated_at(parent);
    sinon.assert.match(result, parent.updated_at.toString());
  });
});
