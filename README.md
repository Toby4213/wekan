[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/wekan/wekan)

# Wekan - Open Source kanban

[![Contributors](https://img.shields.io/github/contributors/wekan/wekan.svg "Contributors")](https://github.com/wekan/wekan/graphs/contributors)
[![Docker Repository on Quay](https://quay.io/repository/wekan/wekan/status "Docker Repository on Quay")](https://quay.io/repository/wekan/wekan)
[![Docker Hub container status](https://img.shields.io/docker/build/wekanteam/wekan.svg "Docker Hub container status")](https://hub.docker.com/r/wekanteam/wekan)
[![Docker Hub pulls](https://img.shields.io/docker/pulls/wekanteam/wekan.svg "Docker Hub Pulls")](https://hub.docker.com/r/wekanteam/wekan)
[![Wekan Build Status][travis_badge]][travis_status]
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/02137ecec4e34c5aa303f57637196a93 "Codacy Badge")](https://www.codacy.com/app/xet7/wekan?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=wekan/wekan&amp;utm_campaign=Badge_Grade)
[![Code Climate](https://codeclimate.com/github/wekan/wekan/badges/gpa.svg "Code Climate")](https://codeclimate.com/github/wekan/wekan)
[![Project Dependencies](https://david-dm.org/wekan/wekan.svg "Project Dependencies")](https://david-dm.org/wekan/wekan)
[![Code analysis at Open Hub](https://img.shields.io/badge/code%20analysis-at%20Open%20Hub-brightgreen.svg "Code analysis at Open Hub")](https://www.openhub.net/p/wekan)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwekan%2Fwekan.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwekan%2Fwekan?ref=badge_shield)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/4619/badge)](https://bestpractices.coreinfrastructure.org/projects/4619)

## Toby's docker-compose.yml changes
- Docker App Env Vars
  - APP_PORT=16002
  - MONGODB_IP="wekandb"
  - ROOT_URL="https://board.odin.ws"
- Docker General Env Vars (for right date and time format)
  - LANG=en_GB.UTF-8
  - LANGUAGE=en_GB:en 
  - LC_ALL=en_GB.UTF-8

## [Translate Wekan at Transifex](https://transifex.com/wekan/wekan)

Translations to non-English languages are accepted only at [Transifex](https://transifex.com/wekan/wekan) using webbrowser.
New English strings of new features can be added as PRs to edge branch file wekan/i18n/en.i18n.json .

## [Wekan feature requests and bugs](https://github.com/wekan/wekan/issues)

Please add most of your questions as GitHub issue: [Wekan Feature Requests and Bugs](https://github.com/wekan/wekan/issues).
It's better than at chat where details get lost when chat scrolls up.

## Chat

[Discussions][discussions] - Wekan Community GitHub Discussions, that are not [Feature Requests and Bugs](https://github.com/wekan/wekan/issues).

[Wekan IRC FAQ](https://github.com/wekan/wekan/wiki/IRC-FAQ)

## FAQ

**NOTE**:
- Please read the [FAQ](https://github.com/wekan/wekan/wiki/FAQ) first
- Please don't feed the [trolls](https://github.com/wekan/wekan/wiki/FAQ#why-am-i-called-a-troll) and [spammers](https://github.com/wekan/wekan/wiki/FAQ#why-am-i-called-a-spammer) that are mentioned in the FAQ :)

## About Wekan

Wekan is an completely [Open Source][open_source] and [Free software][free_software]
collaborative kanban board application with MIT license.

Whether you’re maintaining a personal todo list, planning your holidays with some friends,
or working in a team on your next revolutionary idea, Kanban boards are an unbeatable tool
to keep your things organized. They give you a visual overview of the current state of your project,
and make you productive by allowing you to focus on the few items that matter the most.

Since Wekan is a free software, you don’t have to trust us with your data and can
install Wekan on your own computer or server. In fact we encourage you to do
that by providing one-click installation on various platforms.

- Wekan is used in [most countries of the world](https://snapcraft.io/wekan).
- Wekan largest user has 13k users using Wekan in their company.
- Wekan has been [translated](https://transifex.com/wekan/wekan) to about 62 languages.
- [Features][features]: Wekan has real-time user interface.
- [Platforms][platforms]: Wekan supports many platforms.
  Wekan is critical part of new platforms Wekan is currently being integrated to.

## Requirements

- 64bit: Linux [Snap](https://github.com/wekan/wekan-snap/wiki/Install) or [Sandstorm](https://sandstorm.io) /
  [Mac](https://github.com/wekan/wekan/wiki/Mac) / [Windows](https://github.com/wekan/wekan/wiki/Install-Wekan-from-source-on-Windows).
  [More Platforms](https://github.com/wekan/wekan/wiki/Platforms), bundle for RasPi3 ARM and other CPUs where Node.js and MongoDB exists.
- 1 GB RAM minimum free for Wekan. Production server should have minimum total 4 GB RAM.
  For thousands of users, for example with [Docker](https://github.com/wekan/wekan/blob/master/docker-compose.yml): 3 frontend servers,
  each having 2 CPU and 2 wekan-app containers. One backend wekan-db server with many CPUs.
- Enough disk space and alerts about low disk space. If you run out disk space, MongoDB database gets corrupted.
- SECURITY: Updating to newest Wekan version very often. Please check you do not have automatic updates of Sandstorm or Snap turned off.
  Old versions have security issues because of old versions Node.js etc. Only newest Wekan is supported.
  Wekan on Sandstorm is not usually affected by any Standalone Wekan (Snap/Docker/Source) security issues.
- [Reporting all new bugs immediately](https://github.com/wekan/wekan/issues).
  New features and fixes are added to Wekan [many times a day](https://github.com/wekan/wekan/blob/devel/CHANGELOG.md).
- [Backups](https://github.com/wekan/wekan/wiki/Backup) of Wekan database once a day miminum.
  Bugs, updates, users deleting list or card, harddrive full, harddrive crash etc can eat your data. There is no undo yet.
  Some bug can cause Wekan board to not load at all, requiring manual fixing of database content.

## Roadmap and Demo

[Roadmap][roadmap_wekan] - Public read-only board at Wekan demo.

[Developer Documentation][dev_docs]

- There is many companies and individuals contributing code to Wekan, to add features and bugfixes
  [many times a day](https://github.com/wekan/wekan/blob/devel/CHANGELOG.md).
- [Please add Add new Feature Requests and Bug Reports immediately](https://github.com/wekan/wekan/issues).
- [Commercial Support](https://wekan.team/commercial-support/).

We also welcome sponsors for features and bugfixes.
By working directly with Wekan you get the benefit of active maintenance and new features added by growing Wekan developer community.

## Screenshot

[More screenshots at Features page](https://github.com/wekan/wekan/wiki/Features)

[![Screenshot of Wekan][screenshot_wekan]][roadmap_wekan]

## License

Wekan is released under the very permissive [MIT license](LICENSE), and made
with [Meteor](https://www.meteor.com).

[platforms]: https://github.com/wekan/wekan/wiki/Platforms
[dev_docs]: https://github.com/wekan/wekan/wiki/Developer-Documentation
[screenshot_wekan]: https://wekan.github.io/wekan-markdown.png
[features]: https://github.com/wekan/wekan/wiki/Features
[roadmap_wekan]: https://boards.wekan.team/b/D2SzJKZDS4Z48yeQH/wekan-open-source-kanban-board-with-mit-license
[wekan_issues]: https://github.com/wekan/wekan/issues
[wekan_issues]: https://github.com/wekan/wekan/issues
[docker_image]: https://hub.docker.com/r/wekanteam/wekan/
[travis_badge]: https://travis-ci.org/wekan/wekan.svg?branch=devel
[travis_status]: https://travis-ci.org/wekan/wekan
[wekan_wiki]: https://github.com/wekan/wekan/wiki
[translate_wekan]: https://www.transifex.com/wekan/wekan/
[open_source]: https://en.wikipedia.org/wiki/Open-source_software
[free_software]: https://en.wikipedia.org/wiki/Free_software
[discussions]: https://github.com/wekan/wekan/discussions

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwekan%2Fwekan.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwekan%2Fwekan?ref=badge_large)
