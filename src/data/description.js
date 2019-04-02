/* tslint:disable */
export const description =
`### Research problem

Volumentric quantification of brain tissues has shown to be valuable for the diagnosis, progression and treatment monitoring of numerous neurological conditions, such as Alzheimer's disease and multiple scleroris [1].
Considering the large amount of existing brain tissue segmentation methods as well as available data, there is a need for systematic comparison of these algorithms. The aim of this benchmark is to compare automatic algorithms for segmentation of grey matter (GM), white matter (WM) and cerebrospinal fluid (CSF) on T1-weighted 3.0 Tesla simulated MRI scans of the brain.

The task of the benchmark is to segment grey matter, white matter and cerebrospinal fluid.


#### Type of benchmark

There are two types of benchmark challenges: insight and deployment challenges [2]. The objective of a deployment challenge is to find algorithms that successfully solve a specific problem. To be able to make such generalizations, a quantitative benchmark design is needed.

An insight challenge, on the other hand, has the objective to gain an understanding of what class(es) of algorithms can be useful for a certain research problem. For such a benchmark, a qualitative design is sufficient. Insight challenges are useful for determining future research directions. Additionally, they are useful for investating which aspects within a research problem are important and should be taken into account when designing a deployment challenge.

This benchmark is an insight challenge, which entails that we adopt a qualitative design. We aim to understand what class of algorithms is effective for MRI brain tissue segmentation. This knowlegde can then be used for further research and benchmarking. The aim here is *not* to generalize the results to tissue segmentation in general and find the best algorithms for this task. The data that we use is not a representative sample of all cases and thus also not suitable to make such inferences.


### Benchmark workflow

1.	Download the 5 training data sets
2.	Use the training data to develop an algorithm
3.	Submit your segmentation algorithm to the EYRA benchmark platform
4.	Your algorithm will be applied to 15 test data sets
5.	Results based on the metrics will be published on the public leaderboard


### Data

20 fully annotated single-sequence T1-weighted 3.0 Tesla MRI brain scans are available (pixel size: 1.0x1.0mm, image size: 256x256 pixels). The scans have been simulated using the SIMRI [3] simulator, where realistic brain phantoms were used as input. The phantoms have been obtained from Brainweb (http://www.bic.mni.mcgill.ca/brainweb/) [4, 5, 6, 7] and consist of transverse slices of 20 subjects with a normal, healthy brain.

The following acquisition parameters were used for the simulation of the scans: pulse sequence: T1-weighted (SE), field strength: 3.0 Tesla, TR: 520, TE: 15, flip angle: 90&deg;. These acquisition parameters were based on optimal scan parameters for 3.0 Tesla scanners [8].


#### Types of variation

Medrik and Aylward [3] give an overview of aspects that can be varied.




### Training, testing and holdout data

5 data sets (scans), with manual segmentations, are provided to use as training data. 15 data sets are used for testing the algorithm. Participants do not have access to the test data sets. Once an algorithm is submitted to the EYRA benchmark platform, it will be applied to the 15 test data sets. For this benchmark there is no additional holdout data.


### Reference standard/ground truth

The manual segmentations were obtained from Brainweb. The manual segmentations denote the tissue class with the largest proportion in each pixel.


### Algorithm evaluation

Submitted segmentation algorithms will be applied to the test data. Predicted tissue classes will be obtained and compared to the manual segmentations. The following metrics are used as algorithm evaluation: the Dice coefficient (DC) and the absolute volume difference (AVD).


#### Dice coefficient


The DC is a measure of spatial overlap, expressed as a percentage:

$$ D = \\frac{2 \\left| A \\cap G \\right|}{\\left| A \\right| + \\left| G \\right|} * 100, $$

where $A$ is the segmentation result and $G$ the ground truth.


#### Absolute volume difference


The AVD is the percentage absolute volume difference:

$$ AVD = \\frac{\\left| V_a - V_g \\right|}{V_g} * 100, $$

where $V_a$ is the volume of the segmentation result. $V_g$ is the volume of the ground truth.

<br>

1. The DC and AVD will be calculated for each data set and each tissue type (GM, WM, CSF)
2. The final ranking of the leaderboard is based on the results of all 15 test datasets
    - Mean value over all 15 data set is determined for GM, WM and CSF.
    - Each partipant receives a rank for each tissue type (GM, WM, CSF) and each evaluation metric (DC, AVD)
    - Final score is determined by adding the ranks for each time (rank of all tissue types and evaluation measures)




Automatic evaluation is used, metric software is automatically applied to compare the ground truth and algorithm segmentation results.`;
