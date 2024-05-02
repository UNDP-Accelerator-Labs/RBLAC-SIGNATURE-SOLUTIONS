# RBLAC UNDP Signature Solution Toolkit

Welcome to the Siganture Solution toolkit from the RBLAC to support UNDP signature solutions.

The toolkit is aiming to gather and organize the work of our region to share concrete tools that can be used and replicated by other country offices. As the Accelerator Lab Global Team puts it, 'to put the findings and learnings of the Accelerator Lab Network at the fingertips of all UNDP’.

You can view the live toolkit [here](https://undp-accelerator-labs.github.io/Innovation-Toolkit-for-UNDP-Signature-Solutions/)

## Submitting Requests

Have a question or facing an issue? We're here to help! Follow the steps below to submit a request using our issue template.

1. Click on the [Issues](https://github.com/UNDP-Accelerator-Labs/toolkit-micro-site-template/issues) tab at the top of the repository.
2. Select "New Issue."
3. Choose the appropriate issue template based on your request type.
4. Fill in the template with as much detail as possible.
5. Click "Submit New Issue" to open your request.

Our team will review your request and provide assistance as soon as possible. Thank you for contributing to the improvement of the UNDP Accelerator Labs Toolkit!

## Adding a contributor

The file `contributors.yml` contains the data about contributors. The website uses it to generate dynamically each contributor's page, as well as the [contributors page](/Team.html). To add a new contributor, you must: 

1. Add a picture of the contributor in the `public/imgs/contributors` folder.
1. Create an entry in the `contributors.yml` file. Each entry has a key of the form NAME-SURNAME (do not forget the hyphen between the two), and a value in the form of a set of key:value pairs. Follow the structure provided.
3. You can now create live links to the contributor's page from the factsheets of the tool she or he has helped create. The link takes the form `[Name Surname](/contributors/NAME-SURNAME.html)`. Remember these links are case-sensitive. 

### Monitoring usage

As of 2024-05-02, we have added a simple pageviews counter. We chose [Goat Counter](https://www.goatcounter.com) because it's completely open source, independent, and free for small sites. If you are duplicating the repo, remember to replace the snippet of code that calls the usage monitoring script: you will find it at the end of the `default.htlm` file, before the `</body>` tag. Usage statistics are visible here: [https://signature-solution.goatcounter.com/](https://signature-solution.goatcounter.com/).  [Adedapo Aderemi](mailto:adedapo.aderemi@undp.org) is the admin of the Goat Counter account. 


## License
This project is licensed under the Creative Commons Attribution 4.0 International License.

You can view the full license text [here](https://creativecommons.org/licenses/by/4.0/legalcode).

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
