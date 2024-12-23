export const PROFILE_AVATAR_DIMENSIONS_TYPES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export const PROFILE_AVATAR_BADGE_DIMENSIONS_TYPES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export const COVER_IMAGE_DIMENSIONS_TYPES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export const PROFILE_AVATAR_DIMENSIONS = {
  [PROFILE_AVATAR_DIMENSIONS_TYPES?.SMALL]: { width: 40, height: 40 },
  [PROFILE_AVATAR_DIMENSIONS_TYPES?.MEDIUM]: { width: 70, height: 70 },
  [PROFILE_AVATAR_DIMENSIONS_TYPES?.LARGE]: { width: 120, height: 120 },
};

export const PROFILE_AVATAR_BADGE_DIMENSIONS = {
  [PROFILE_AVATAR_BADGE_DIMENSIONS_TYPES?.SMALL]: { width: 20, height: 20 },
  [PROFILE_AVATAR_BADGE_DIMENSIONS_TYPES?.MEDIUM]: { width: 30, height: 30 },
  [PROFILE_AVATAR_BADGE_DIMENSIONS_TYPES?.LARGE]: { width: 40, height: 40 },
};

export const COVER_IMAGE_DIMENSIONS = {
  [COVER_IMAGE_DIMENSIONS_TYPES?.SMALL]: { height: 60 },
  [COVER_IMAGE_DIMENSIONS_TYPES?.MEDIUM]: { height: 100 },
  [COVER_IMAGE_DIMENSIONS_TYPES?.LARGE]: { height: 200 },
};
