const role = [
  {
    name: "admin",
    disguise: "HA9qmpqusKeEaT52",
  },
  {
    name: "employee",
    disguise: "3kza1avN8xFSabsz",
  },
  {
    name: "school",
    disguise: "aJ4c3@cea9JQkYCX",
  },
  {
    name: "student",
    disguise: "sNt!dYNpjsDyPPBV",
  },
];

export default function getRole(userData) {
  const r = role.findIndex((val) => val.disguise === userData.role);
  return role[r].name;
}
