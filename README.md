# Chorus_SOP
ChoRUS centralized SOP documentation site

This repository is trying to organize all SOPs in an elengant manner to help each site contribute to the CHoRUS consortium.
The website is built with [Docusaurus](https://docusaurus.io/) and all contents are written with Markdown and MDX syntax.

[**Online documentation SOP site**](https://chorus-ai.github.io/Chorus_SOP/). 

## SOP Development

This repository is also used to track the development of SOP documentation through an associated [GitHub Project](https://github.com/orgs/chorus-ai/projects/13).

The following SOPs are under development:
| SOP Title | Lead | Issue Link | Status |
| :--- | :--- | :--- | :--- |
| Structured EHR data | @jshoughtaling | https://github.com/chorus-ai/Chorus_SOP/issues/2 | IN PROGRESS |
| Flowsheet data | @jshoughtaling | https://github.com/chorus-ai/Chorus_SOP/issues/3 | IN PROGRESS |
| Waveform data | @briangow | https://github.com/chorus-ai/Chorus_SOP/issues/4 | IN PROGRESS |
| Imaging data | @edilbertoamorim | https://github.com/chorus-ai/Chorus_SOP/issues/5 | IN PROGRESS |
| Data Requests | @clermontg | https://github.com/chorus-ai/Chorus_SOP/issues/6 | IN REVIEW |
| Free-Text data | @hol7001 | https://github.com/chorus-ai/Chorus_SOP/issues/7 | IN PROGRESS |
| Data update | @tcpan | https://github.com/chorus-ai/Chorus_SOP/issues/9 | IN PROGRESS |
| Data quality | @jshoughtaling | https://github.com/chorus-ai/Chorus_SOP/issues/10 | COMPLETE |
| Central Processing | @rkamaleswaran | https://github.com/chorus-ai/Chorus_SOP/issues/11 | IN PROGRESS |
| Privacy | @anotherkaizhang | https://github.com/chorus-ai/Chorus_SOP/issues/12 | IN PROGRESS |
| Common data elements | @ucabhkw | https://github.com/chorus-ai/Chorus_SOP/issues/13 | IN PROGRESS |
| Safe Harboring Approach | @anotherkaizhang | https://github.com/chorus-ai/Chorus_SOP/issues/14 | IN PROGRESS |
| Clinical Validation of Mappings | @p-talapova | https://github.com/chorus-ai/Chorus_SOP/issues/17 | COMPLETE |
| Multimodal Data Linkage | @jshoughtaling | https://github.com/chorus-ai/Chorus_SOP/issues/28 | COMPLETE |
| Cataloging Unmapped Terms | @p-talapova | https://github.com/chorus-ai/Chorus_SOP/issues/33| COMPLETE |

## How to contribute to the SOP documentation

The **main way** to contribute SOP documentation to this site is by opening a pull request.

Practically, this means you will need to:
1. If you do not have a GitHub account, create one and login. If you do have one, login to your GitHub account
2. Clone the GitHub repository to your local environment
  - If you're not familiar with GitHub, the easiest route is to install [GitHub Desktop](https://desktop.github.com/), login, and clone the repository via url with: https://github.com/chorus-ai/Chorus_SOP.git
  - If you are familiar with GitHub, you can clone the repo via the [GitHub CLI](https://cli.github.com/) through `git clone https://github.com/chorus-ai/Chorus_SOP.git`
3. Create a new branch in the repository, prefixed with the word `review` (e.g. `review-omop-mapping`)
4. On that branch, add your SOP - using the [**provided template**](https://github.com/chorus-ai/Chorus_SOP/blob/main/sop-website/docs/TEMPLATE/SOP-Template.mdx) - into the relevant SOP category subdirectory in the docs directory (see the [OMOP Mapping PR](https://github.com/chorus-ai/Chorus_SOP/pull/19) as an example)
5. Push your new branch from your local directory to origin, and open a Pull Request where you describe any relevant details or context to be reviewed
6. Once reviewed and approved by other CHoRUS members, you can merge your branch into the main branch, where it will then be automatically built into the webpage

**Alternatively**, if you notice minor changes that you'd like to suggest to existing SOPs, you can browse the built site (rather than the GitHub repository) and perform the following steps:

1. Navigate to the relevant page of online documentation site, and click `Edit this page` button at the bottom.
2. A GitHub editing page will pop up for you to edit the contents in the `review` branch; make your own edition and commit your changes to that branch.
3. Submit the pull request to merge those changes into the main branch

If you would like to add topics that are not yet represented, please add your request to [`issues`](https://github.com/chorus-ai/Chorus_SOP/issues).

## Resources
- [MDX](https://mdxjs.com/)
- [Docusaurus](https://docusaurus.io/)
