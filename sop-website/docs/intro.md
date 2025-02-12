---
sidebar_position: 1
---

# SOP Intro

This online resource was constructed to provide a central SOP interface for members of the B2AI CHoRUS DGP. 

The SOP documents provide detailed instructions with regard to:

- Structured EHR data
- Flowsheet data
- Waveform data
- Imaging data
- Data Requests
- Freetext data
- Data update
- Data quality
- Central Processing
- Privacy
- Common data elements
- Safe Harboring Approach
- OMOP Mapping

All documents will be edited, reviewed, and validated by CHoRUS.

If you have any good ideas or would love to share your experience with the site, please feel free to use [Blog](/blog) section to contribute.


## How to contribute to the SOP documentation

The **main way** to contribute SOP documentation to this site is by opening a pull request.

Practically, this means you will need to:
1. If you do not have a GitHub account, create one and login. If you do have one, login to your GitHub account
2. Clone the GitHub repository to your local environment
  - If you're not familiar with GitHub, the easiest route is to install [GitHub Desktop](https://desktop.github.com/), login, and clone the repository via url with: https://github.com/chorus-ai/Chorus_SOP.git
  - If you are familiar with GitHub, you can clone the repo via the [GitHub CLI](https://cli.github.com/) through `git clone https://github.com/chorus-ai/Chorus_SOP.git`
3. Create a new branch in the repository, prefixed with the word `review` (e.g. `review-omop-mapping`)
4. On that branch, add your SOP into the relevant SOP category subdirectory in the docs directory (see the [OMOP Mapping PR](https://github.com/chorus-ai/Chorus_SOP/pull/19) as an example)
5. Push your new branch from your local directory to origin, and open a Pull Request where you describe any relevant details or context to be reviewed
6. Once reviewed and approved by other CHoRUS members, you can merge your branch into the main branch, where it will then be automatically built into the webpage

**Alternatively**, if you notice minor changes that you'd like to suggest to existing SOPs, you can browse the built site (rather than the GitHub repository) and perform the following steps:

1. Navigate to the relevant page of online documentation site, and click `Edit this page` button at the bottom.
2. A GitHub editing page will pop up for you to edit the contents in the `review` branch; make your own edition and commit your changes to that branch.
3. Submit the pull request to merge those changes into the main branch

If you would like to add topics that are not yet represented, please add your request to [`issues`](https://github.com/chorus-ai/Chorus_SOP/issues).
