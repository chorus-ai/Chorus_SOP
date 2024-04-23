---
title: OLD Data Uploading SOP [DEPRECATED]
id: OLD Data Uploading SOP
description:  A now-deprecated SOP for uploading data to the Azure cloud
---


# **THIS DOCUMENT IS DEPRECATED AND IS FOR DRAFTING USE ONLY**

## Uploading to Central Data Warehouse

 [Download Data Uploading SOP doc](https://github.com/chorus-ai/data_acq_SOP/blob/main/sop-website/docs/Data-Uploading/Data%20Upload%20SOP.docx)

## Purpose

The purpose of this Standard Operating Procedure (SOP) is to specify the expected structure of the data to be uploaded to the central CHoRUS cloud environment.

## Upload schedule

Upload of a pilot dataset of a minimum of 25 patients is required from each site July 15, 2023. This specific request is detailed is previous comuunication. The first upload of 25% of patients contributed to the CHoRUS dataset is due December 30th, 2023. The second, third and last uploads will be due on September 30th of 2024, 2025, and 2026.

## Rationale

Sites will generate data that will need to merged in such a way that the end-user is agnostic of data provenance. Data merging is facilitated by data generation sites developing a process which results in the production of data files that are compatible in format, uploaded to pre-determined folder architecture. The purpose of this SOP is to describe this folder architecture. CHoRUS does not require that each data generation site creates and populates a folder architecture that emulates the central architecture, although doing so may facilitate the debugging of applications dedicated to central uploading of data.

## The centralized cloud environment

This virtual environment is hosted in an Azure platform. The containers structure is setup such that each data generation site (DGS) can access their home folder (e.g. /CHoRUSDataContainers/yourDGS).


<img width="1000" alt="containers" src="https://github.com/chorus-ai/data_acq_SOP/assets/2847495/d7d1d67a-2695-4b2d-92aa-2285b608a09d" />


## Target folder structure

Each DGS will be required to deposit data and metadata files in a dedicated centralized staging environment. This staging environment is a virtual linux server with read/write access for each DGS to their own home folders. The root folder should also contain an updated ReadMe file describing the contain to be found under each data folder and a running history of uploads. We have not planned to provide a template for the ReadMe file, but may do so as needed. Please refer to Figure 1 which depicts the folder structure to upload to.

<img width="1000" alt="containers" src="https://github.com/chorus-ai/data_acq_SOP/assets/2847495/9ea5ef46-8e13-491a-a357-da41e995f84e" />


**Folder Architecture Details**

![Folder Architecture Details](./folderStructureDetail.png)

## Expectations as to file content

### The OMOP EHR folder

This folder should include structured and unstructured 13 OMOP clinical data files(exluding specimen table) as found here (https://ohdsi.github.io/CommonDataModel/cdm54.html#Clinical_Data_Tables). We are not requiring actual notes to be included in the "note_text" field of the NOTE table, but since working with the NOTE_NLP table would greatly benefit from access to foreign keys only present in the NOTE table. Thus the note table should at least contain core identifiers (note_id), descriptors (note_type_concept_id and note_class_concept_id) as well as there foreign keys to PERSON, VISIT_OCURRENCE, VISIT_DETAILS. Each of these table will be in the form of comma delimited files with header rows, with only the records pertaining to the person_id of interest. It will be a centralized responsibility to collate all patients from all sites into a queryable environment.

### The Waveforms folder

According to usage described in the DA SOPs, Waveform data refers to all data acquired from bedside monitors and devices, including alarms, numerics data obtain at regular of irregular intervals, and high-frequency (>1 Hz) waveform data such as digitized EKG tracings.

This folder will include a single source(h5, wfdb, adibin) file collating all waveform data, inclusive of its metadata, in removed PHI form.

Adjustments to the naming convention for clinical waveform data stored in this case in HDF5 format are made to include the duration in seconds and exclude the modality or type of waveform. The format is as follows:

- **Patient Identification**: A unique person ID, typically a number or numeric digits from OMOP Person Table.
- **Study Date**: The date when the waveform data was recorded, in the format `YYYYMMDD`.
- **Start Time**: The start time of the recording, in `HHMMSS` format.
- **Duration in Seconds**: The duration of the recording in seconds.

#### Example File Name
`PersonID_20230101_101530_3600.h5`

This example represents a recording for PersonID on January 1, 2023, starting at 10:15:30, with a duration of 3600 seconds.

### The Images folder

- **Patient Identification**: Typically includes a person ID.

- **Study Date**: The date when the study was conducted, usually in the format `YYYYMMDD`.

- **Study Time**: The time of the study, often in `HHMMSS` format.

- **Modality**: Refers to the type of equipment used for the scan, such as MR (Magnetic Resonance), CT (Computed Tomography), or US (Ultrasound).

- **Series Number**: Indicates the sequence of a particular series of images in a study.

- **Instance Number**: Represents the specific image number within a series.

#### Example of a DICOM Image Name
`PersonID_20230101_101530_CT_01_001.dcm`

This example would represent a CT scan for a patient, conducted on January 1, 2023, at 10:15:30. This image is the first in its series and the first in that series.


## Update mechanism

It is expected that updates will be limited to the inclusion of new patient_id folders, as well as completion of data files in existing folders as these become more complete or updated following mandatory quality checks. For example, image files become available. These updates can be asynchronous with the expected yearly major uploads, but the ReadMe file must accurately reflect the content of the data folders (/OMOP, /Waveforms and /Images)
