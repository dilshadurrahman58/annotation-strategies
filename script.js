const SOURCE_LABELS = {
  WP: "The Washington Post",
  NYT: "The New York Times",
  WSJ: "The Wall Street Journal",
  ECO: "The Economist",
};

const CHART_LABELS = {
  BAR: "Bar / Column",
  LINE: "Line",
  SCATTER: "Scatter",
};

// ─── Strategy Data ────────────────────────────────────────────────────────────

const STRATEGIES = [
  {
    id: "S1",
    title: "Ensemble Annotation Use",
    paperSection: "§5.1",
    summary:
      "Professional news charts rarely employ a single annotation type in isolation. Designers routinely combine highlighting, connectors, and textual descriptions into coordinated ensembles in which each primitive serves a distinct and non-interchangeable communicative role.",
    detail: [
      "The ensemble pattern is the dominant compositional form across all four outlets in the analyzed corpus. Three-way combinations—area highlighting, connector lines, and embedded textual statements—are especially common. Single-type annotation is a statistical outlier in the professional sample, observed only in charts with a very narrow argumentative scope.",
      "The functional logic of ensemble use rests on a division of labor across annotation primitives: highlighting establishes the scope of relevance (which region or category the argument concerns); connectors establish referential precision (which marks a piece of text addresses); text carries the interpretive content (the claim, mechanism, or comparison). These functions are not interchangeable. A connector without interpretive text is referentially incomplete; text without a connector is visually unanchored; highlighting without text or connectors lacks interpretive specificity.",
      "The implication for design is that annotation should be conceived as orchestration rather than type-selection. The relevant design question is not which annotation primitive to use, but how to coordinate multiple primitives—each performing its specific function—into a structure that supports the reader's path from headline to evidence.",
    ],
    implication:
      "Authoring systems should support coordinated multi-annotation structures, including explicit mechanisms for composing text, connectors, and region highlights into semantically coherent ensembles rather than presenting annotation types as independent choices.",
    exampleId: "40_WSJ_BAR",
    indexArgument:
      "Fig. 1a exhibits the three-part ensemble structure most directly: a 2% target-rate reference line establishes contextual scope; two connector curves establish referential linkage between text callouts and specific bar segments; the textual callouts carry the interpretive claim about base-effect mechanisms. No single element of this ensemble could substitute for the others. The mapping argument rests on functional complementarity across all three primitives, not on annotation count alone.",
  },
  {
    id: "S2",
    title: "Context-Specific Highlighting",
    paperSection: "§5.2",
    summary:
      "Highlighting in professional charts is consistently applied only to the subset of the chart relevant to the article's argument. Emphasis is earned by narrative relevance, not applied for visual variety or general aesthetics.",
    detail: [
      "When professionals use highlighting—through colored segments, shaded regions, or spatial enclosures—it is invariably selective: only the regions, categories, or time periods that the article's argument directly concerns receive emphasized treatment. Background elements are rendered visually subordinate, preserving global readability while directing attention to the argument-critical structure.",
      "In the analyzed corpus, context-specific highlighting takes several implementation forms: gray shading over a pandemic-era time window in a multi-series line chart (Fig. 2); violet-highlighted segments marking a policy-relevant spending category in a bar chart (Fig. 3); a pink enclosure rectangle situating a disease within an estimated parameter range in a scatter plot (Fig. 1f); yellow-highlighted bar segments isolating one economic contributor from monthly totals (Fig. 1b). In each case, the scope of highlighting is determined by the article's subject rather than by compositional aesthetics.",
      "This strategy functions as an attention-allocation mechanism that precedes text reading: by rendering the argument-relevant region visually distinct, the designer reduces the search cost of connecting a headline claim to its chart evidence—a step that would otherwise require the reader to identify, without guidance, which portion of the chart the article is about.",
    ],
    implication:
      "Highlighting scope should be defined by the article's argumentative focus. Emphasis applied to regions not directly referenced in the text creates false salience and may mislead readers about the chart's intended communicative focus.",
    exampleId: "11_WP_LINE",
    indexArgument:
      "Fig. 2 demonstrates selective temporal emphasis most clearly: gray shading is applied to the Jan. 2021 peak, the Delta wave interval, and the Omicron wave—the three periods the article analyzes—while intervening months receive no highlighting. The scope of emphasis matches the scope of the article's argument precisely, illustrating contextual focus control rather than decorative shading.",
  },
  {
    id: "S3",
    title: "Article-Specific Text Descriptions",
    paperSection: "§5.3",
    summary:
      "In-chart text in professional news visualizations carries interpretive content drawn from the article's argument—causal explanations, contextual comparisons, significance statements—positioned at the site of visual evidence rather than confined to captions.",
    detail: [
      "Section 5.3 establishes that professionals embed interpretive language directly in charts rather than restricting interpretation to captions. This in-chart text includes causal mechanisms explaining observed trends (e.g., that base effects elevated measured inflation), comparisons to relevant thresholds (the roughly 2.1 births-per-woman level for population stability), and significance characterizations that link a data pattern to a policy or social outcome. These descriptions are drawn from the article itself, not generated by chart-level data labeling.",
      "The effect of article-specific text is to bridge the gap between visual pattern and analytical meaning at the moment of encounter. A reader who sees a trend diverge upward and simultaneously reads 'OxyContin painkiller introduced' (Fig. 4) has been given the interpretive frame at the exact site of the visual event, rather than needing to return to the prose narrative to understand the causal context.",
      "In the analyzed corpus, article-specific descriptions are almost always paired with connector lines. This co-occurrence confirms that professionals treat such text as referentially bound—as pointing at a specific mark—rather than as floating commentary. The connector is the mechanism that makes the text local to its evidence.",
    ],
    implication:
      "Textual annotation should encode analytical meaning tied to specific marks. The design question for in-chart text is not where to position a label but what interpretive claim to embed and at which visual referent—decisions that require the annotation designer to engage with the article's argument directly.",
    exampleId: "25_NYT_LINE",
    indexArgument:
      "Fig. 1e embeds the statement 'India's fertility rate ensures a roughly stable population' connected via a connector line to India's projected trajectory. This is not a data label or axis description; it is the article's interpretive conclusion about what the downward trajectory implies for population dynamics. The mapping argument rests on the semantic content of the embedded text—its interpretive rather than descriptive character.",
  },
  {
    id: "S4",
    title: "Caption-Annotation Coherence",
    paperSection: "§5.4",
    summary:
      "Captions and in-chart annotations are rhetorically aligned in professional news charts: the caption states the primary claim, and the annotations provide localized visual evidence. The two layers present a unified, non-contradictory argument.",
    detail: [
      "Section 5.4 reports that in the analyzed corpus, chart captions and in-chart annotations consistently communicate in the same argumentative direction. When a caption asserts a claim—that proposed spending cuts will begin at 13 percent in 2024, or that gas usage has recovered to over 80 percent of its pre-pandemic level—the in-chart annotations localize and evidence that claim through marks, highlighting, and positioned text. The two layers do not introduce competing interpretations.",
      "This finding is substantively non-trivial. Captions and annotations are often produced through distinct workflows and may be authored under different constraints. The observed coherence in the professional sample suggests either a shared understanding of the argumentative goal or an editorial norm of reviewing these elements together as a unified communication layer before publication.",
      "The practical consequence of coherence is a unified reading path: a reader moving from headline to caption to chart encounters a consistent and mutually reinforcing argument at each level. The failure mode—caption and annotation diverging in interpretive direction—forces the reader to adjudicate between two sources of interpretive authority, a cognitive burden that appears to be systematically avoided in the professional sample.",
    ],
    implication:
      "Caption writing and annotation design should be developed and reviewed together as components of a single communication layer. Treating them as independent production tasks increases the risk of unintended interpretive divergence that readers must resolve without authorial guidance.",
    exampleId: "24_NYT_BAR",
    indexArgument:
      "Fig. 3 is the clearest case: the caption's claim—that the G.O.P. plan would produce larger and larger cuts beginning with a 13 percent reduction in 2024—is restated structurally through three coordinated in-chart elements: a dashed temporal divider marking the projection onset, violet highlighting marking the cut segments, and an in-chart 'Proposed cuts' label. All annotation elements serve the caption's single claim. The mapping argument is rhetorical coherence between textual framing and visual evidence.",
  },
  {
    id: "S5",
    title: "Numeric Emphasis",
    paperSection: "§5.5",
    summary:
      "Professionals embed explicit numeric values directly in charts at argument-critical points—peaks, thresholds, and turning points—even when axes already encode those values, to anchor the article's claim in specific, unambiguous numbers.",
    detail: [
      "Section 5.5 documents frequent use of explicit value labels at argument-critical data points in charts that already provide quantitative context through axis scales. In the analyzed corpus, these labels concentrate at the values the article's argument directly depends on—not distributed uniformly across data points as a formatting convention, but placed selectively at peaks, transitions, and thresholds that are explicitly discussed in the article text.",
      "The paper interprets direct numeric labeling not as informational redundancy but as a deliberate rhetorical strategy for reducing inferential distance. Axis interpolation—reading a value from a grid—is a cognitive step that requires attention and introduces approximation. By printing the value directly, the designer eliminates that step at precisely the points where precision is most consequential for the article's argument. The labeled value functions as an argumentative anchor rather than a convenience.",
      "In Fig. 1d, three values are labeled explicitly (8.7 million, 9.7 million, 8.8 million) on a chart that has a fully informative y-axis. Their presence is justified by the article's recovery argument: the ratio calculation that underlies '80 percent recovered' requires knowing all three values precisely. In Fig. 1b, monthly percentages are labeled at each bar because the article attributes inflation contributions on a month-by-month basis. Label density is calibrated to argumentative demand.",
    ],
    implication:
      "Direct numeric labels should be applied selectively to argument-critical values rather than as uniform formatting. The justification for including a value label is that the article's claim requires readers to know that specific number precisely, rather than approximately inferring it from an axis grid.",
    exampleId: "4_WP_LINE",
    indexArgument:
      "Fig. 1d labels three values explicitly—8.7 million (pre-pandemic baseline), 9.7 million (pre-crash peak), and 8.8 million (July 2020 recovery)—despite a fully informative y-axis. These are the exact values needed to evaluate the article's '80 percent recovered' claim: the baseline and current value must be known to compute the recovery ratio. The mapping argument is that these labels eliminate a necessary calculation for the reader rather than presenting redundant information.",
  },
];

// ─── Paper Examples ───────────────────────────────────────────────────────────

const PAPER_EXAMPLES = [
  {
    id: "40_WSJ_BAR",
    file: "40_WSJ_BAR.png",
    paperFigure: "Fig. 1a",
    title: "Change in consumer-price index from a year earlier",
    source: "WSJ",
    chart: "BAR",
    rationale:
      "Connector curves, a 2% target-rate reference line, text callouts, and a direct value label are coordinated to explain inflation dynamics relative to the Federal Reserve's policy threshold.",
    strategies: ["S1", "S2", "S3", "S5"],
    annotationElements: [
      "Dotted reference line at the 2% target rate, labeled 'Target rate: 2%'.",
      "Two connector curves linking text callouts to specific bar clusters: one to the below-target pandemic period, one to the above-target 2021 period.",
      "Text callouts explaining the base-effect mechanism in each period.",
      "Direct numeric label '5.0% annual inflation' at the May 2021 endpoint.",
      "Color-coded bars: solid fill for months inflation rose, hatched fill for months it fell.",
    ],
    strategyEvidence: {
      S1: "The chart combines a reference line, two connector curves, text callouts, and a direct value label into a single coordinated ensemble (§5.1). No single element would be interpretively sufficient without the others: the connectors anchor the text to specific bars, the reference line establishes the evaluative frame, and the final value label provides the argument's quantitative conclusion.",
      S2: "The color distinction between inflation-rose (solid) and inflation-fell (hatched) bars provides selective directional emphasis. The 2% reference line also functions as a contextual boundary demarcating the policy-relevant threshold, consistent with §5.2.",
      S3: "Both text callouts encode article-specific interpretive content—a causal explanation of the March 2020 pandemic slump's effect on base comparisons and a characterization of 2021 prices as elevated relative to 2020's slump. These are causal statements from the article's analysis, not generic chart annotations (§5.3).",
      S5: "The '5.0% annual inflation' label at the final bar provides a precise figure for the article's headline claim despite the y-axis encoding the same value. It functions as a narrative anchor at the chart's argumentative conclusion—the endpoint the article's base-effect argument is building toward (§5.5).",
    },
    discussion: [
      "The reference line at 2% establishes an evaluative frame before any local trends are read, enabling the text callouts to characterize bars as 'below' or 'above' target without requiring readers to estimate positions against the axis independently.",
      "The two connector curves resolve spatial ambiguity in a dense monthly bar chart: they make explicit which bars the text callouts address across a two-year span.",
      "The annotation structure coheres around a single argument—that inflation crossed above the 2% target in 2021 partly due to pandemic-era base effects—with each annotation element contributing to a different facet of that claim.",
    ],
  },
  {
    id: "8_WP_BAR",
    file: "8_WP_BAR.png",
    paperFigure: "Fig. 1b",
    title: "Used cars and trucks drove spring inflation spike",
    source: "WP",
    chart: "BAR",
    rationale:
      "Localized color highlighting, embedded directional arrows, article-specific text callouts, and explicit percentage labels combine to isolate the contribution of used-vehicle prices to monthly CPI change.",
    strategies: ["S1", "S2", "S3", "S5"],
    annotationElements: [
      "Yellow/gold highlighting on bars representing months when used vehicles added to inflation (March–July).",
      "Blue highlighting on bars representing months when used vehicles reduced inflation (August–September).",
      "Directional arrows embedded in each highlighted bar segment, indicating contribution direction.",
      "Two text callouts with specific attribution claims: used vehicles added 0.3 percentage points from March to April; used vehicle prices fell in August and September, reducing inflation.",
      "Explicit percentage labels at each bar: 0.3%, 0.4%, 0.6%, 0.8%, 0.6%, 0.9%, 0.5%, 0.3%, 0.4%.",
      "Embedded watermark text 'INFLATION EXCLUDING USED VEHICLES' in the baseline space.",
    ],
    strategyEvidence: {
      S1: "The chart deploys five distinct annotation modes simultaneously: color highlighting, directional arrows, text callouts, explicit value labels, and embedded background text. Each element communicates a specific aspect of the used-vehicle inflation attribution in a dense ensemble (§5.1).",
      S2: "Color highlighting is applied only to the bars representing months when used vehicles had a meaningful contribution—the article's analytical focus. Bars for other months receive no selective highlighting, keeping emphasis proportional to argumentative relevance (§5.2).",
      S3: "The two text callouts communicate article-specific attribution statements: quantified contribution figures for the spike period and an explanation of the reversal. These are quantitative attributions from the article's analysis, not generic descriptions of bar direction (§5.3).",
      S5: "Every bar carries an explicit percentage label, providing a complete month-by-month quantitative record of CPI change. The labels support the attribution argument by enabling direct numeric comparison rather than approximate axis reading (§5.5).",
    },
    discussion: [
      "The directional arrows embedded within highlighted segments make contribution direction explicit without requiring inference from bar height alone, which is particularly valuable given the partially highlighted bar structure.",
      "The dual color scheme—yellow for inflationary contribution, blue for deflationary—encodes contribution direction in the highlighting itself, creating a redundant visual signal that reinforces directional interpretation.",
      "Explicit value labels on every bar support the month-by-month attribution argument by making all relevant quantities available for direct comparison.",
    ],
  },
  {
    id: "64_ECO_SCATTER",
    file: "64_ECO_SCATTER.png",
    paperFigure: "Fig. 1c",
    title: "The heat is off",
    source: "ECO",
    chart: "SCATTER",
    rationale:
      "A labeled historical trend line and selective color emphasis on three recent observations are combined to situate recent European gas usage below the established trend.",
    strategies: ["S1", "S2", "S3"],
    annotationElements: [
      "Dashed trend line representing the 2013–22 historical average relationship between temperature deviation and gas usage, labeled '2013-22 trend'.",
      "Historical scatter points rendered in a muted teal.",
      "Three recent observations (Dec 2022, Jan 2023, Feb 2023) rendered in a contrasting salmon/pink with direct point labels.",
    ],
    strategyEvidence: {
      S1: "The chart uses an ensemble of a fitted trend line, differential color encoding for temporal subsets, and direct labels for selected points. Together they support the comparative argument that recent values fall below the historical trend—a claim no single element could establish independently (§5.1).",
      S2: "The salmon/pink coloring is applied exclusively to the three recent months that constitute the article's analytical focus, while all historical data points remain in a muted background color. This selective treatment focuses attention on the article-relevant subset without removing the contextual distribution (§5.2).",
      S3: "The label '2013-22 trend' and the direct point labels 'Dec 2022', 'Jan 2023', 'Feb 2023' communicate article-specific temporal identifiers rather than generic axis values or category names. They identify the specific periods being compared in the article's analysis (§5.3).",
    },
    discussion: [
      "The trend line is the critical annotation for the article's argument: without it, the scatter plot shows gas usage values but provides no reference against which to characterize recent values as unusually low.",
      "The separation between background (historical, muted) and foreground (recent, emphasized) data creates a visual hierarchy that supports comparative interpretation: recent months are evaluated relative to the trend established by the background distribution.",
      "Direct labels for the three recent observations eliminate legend lookup in a chart where the comparison is between two temporal subsets rather than between named categories.",
    ],
  },
  {
    id: "4_WP_LINE",
    file: "4_WP_LINE.png",
    paperFigure: "Fig. 1d",
    title: "Gas usage for cars and trucks is over 80 percent recovered",
    source: "WP",
    chart: "LINE",
    rationale:
      "Gray shading isolates the pandemic-era interval, and three explicit numeric labels at argument-critical points anchor the article's quantitative recovery claim.",
    strategies: ["S2", "S4", "S5"],
    annotationElements: [
      "Gray shading from March 2020 to July 2020, labeled 'The pandemic era is shaded.'",
      "Direct numeric labels at three key points: '8.7 million' (Jan. 2019 baseline), '9.7 million' (pre-crash peak), '8.8 million' (July 2020 recovery).",
      "Headline: 'Gas usage for cars and trucks is over 80 percent recovered.'",
    ],
    strategyEvidence: {
      S2: "Gray shading is applied exclusively to the March–July 2020 interval—the pandemic-era disruption the article analyzes. Months before and after receive no highlighting, preserving their role as contextual baseline. The shading pre-marks the analytical interval so that the structural break in the line is immediately legible as an event-period artifact (§5.2).",
      S4: "The headline's claim ('over 80 percent recovered') is directly evidenced by the three explicit value labels: the baseline (8.7 million), the pre-crash peak (9.7 million), and the recovery value (8.8 million). A reader can verify the claim by comparing these labeled values. Caption and annotation communicate the same argument through different channels (§5.4).",
      S5: "All three labeled values are readable from the y-axis, making them technically redundant with the axis. Their presence is justified because the recovery percentage calculation—which requires all three values—cannot be performed approximately from visual axis reading with sufficient precision (§5.5).",
    },
    discussion: [
      "The three labeled values form a minimal quantitative set for verifying the '80 percent recovered' claim: baseline, peak, and current value. Their explicit presence invites the reader to perform the calculation rather than taking the headline on faith.",
      "The gray shading pre-marks the pandemic interval so that the sharp decline followed by recovery is immediately legible as an event-period disruption rather than a secular trend change.",
      "The absence of other annotation elements—connector text, directional arrows—is consistent with the chart's argumentative simplicity: it makes a single comparative claim about two values relative to a baseline.",
    ],
  },
  {
    id: "25_NYT_LINE",
    file: "25_NYT_LINE.png",
    paperFigure: "Fig. 1e",
    title: "Fertility rate (India and China)",
    source: "NYT",
    chart: "LINE",
    rationale:
      "Projected interval shading, a connector-linked interpretive statement, direct series labels, and a stable-population reference line are combined to support an argument about India's fertility trajectory relative to population replacement.",
    strategies: ["S1", "S2", "S3"],
    annotationElements: [
      "Gray shading over the projected period (post-2020), labeled 'Projected →'.",
      "Horizontal reference line at approximately 2.1 births per woman, labeled 'Approx. fertility rate for a stable population'.",
      "Connector line linking a text callout to India's projected trajectory: 'India's fertility rate ensures a roughly stable population.'",
      "Direct series labels 'India' and 'China' at the respective trend lines.",
      "Historical label 'One-child policy' marking the relevant period on the China series.",
    ],
    strategyEvidence: {
      S1: "The chart deploys five distinct annotation elements in coordinated roles: the projected shading establishes epistemic context; the reference line provides the evaluative threshold; the connector-text pair delivers the interpretive claim; direct labels support comparative reading. This is the multi-primitive ensemble structure described in §5.1.",
      S2: "The gray shading marks the projected period as distinct from the historically observed trend—a temporal boundary encoding epistemic status rather than argumentative focus. The shading communicates that values to the right of 2020 have a different status than historical values, reducing the risk of misreading projections as observations (§5.2).",
      S3: "The text callout 'India's fertility rate ensures a roughly stable population' is the article's interpretive conclusion about the trajectory—a significance statement that goes beyond describing the line's direction. Its connection via connector to India's projected trajectory makes it spatially specific to the claim's evidence (§5.3).",
    },
    discussion: [
      "The stable-population reference line (approximately 2.1 births per woman) is the evaluative threshold against which the article's 'stable population' claim is made. Without this line, the claim 'stable' would require readers to supply the threshold value independently.",
      "The connector-text pair is positioned in the projected region, binding the interpretive claim to the future trajectory rather than to historical values—encoding the article's forward-looking argument.",
      "The observed/projected boundary encodes an epistemic distinction that is particularly important in long-horizon demographic projections, where the article's claim depends on a future trajectory rather than an observed pattern.",
    ],
  },
  {
    id: "19_NYT_SCATTER",
    file: "19_NYT_SCATTER.png",
    paperFigure: "Fig. 1f",
    title: "How the new coronavirus compares with other infectious diseases",
    source: "NYT",
    chart: "SCATTER",
    rationale:
      "A rectangular enclosure with accompanying bound statements, direct disease labels, and directional axis annotations are combined to situate the novel coronavirus relative to known diseases across two risk dimensions.",
    strategies: ["S1", "S2", "S3", "S5"],
    annotationElements: [
      "A pink rectangle enclosing the estimated coronavirus region in the parameter space.",
      "In-chart text: 'New coronavirus — Most estimates put the fatality rate below 3%, and the number of transmissions between 2 and 4.'",
      "Direct labels for all comparator diseases: Bird flu, Ebola, MERS, SARS, Smallpox, Spanish flu, Seasonal flu, 2009 flu, Common cold, Polio, Chickenpox, Measles.",
      "Directional axis annotations: 'More deadly ↑' and 'Spreads faster →'.",
    ],
    strategyEvidence: {
      S1: "The chart deploys four distinct annotation modes: a regional enclosure, in-text numeric bounds, direct labels for all comparators, and directional axis semantic annotations. Together they construct the comparative argument situating COVID-19 within a known disease landscape (§5.1).",
      S2: "The pink rectangle highlights the region of the scatter plot corresponding to the article's subject, distinguishing it visually from all named comparators rendered as individual labeled points. The enclosure communicates both position and uncertainty about precise parameter values (§5.2).",
      S3: "The in-chart text states the article's epidemiological estimates—'below 3%' and 'between 2 and 4'—directly within the chart space at the site of the enclosure they justify. This text is not a data label but an interpretive bound statement drawn from the article's analysis (§5.3).",
      S5: "The explicit numeric bounds—fatality rate below 3%, transmissions between 2 and 4—are argument-critical values that anchor the enclosure's position. They allow the reader to evaluate the enclosure's placement with quantitative precision rather than visual approximation (§5.5).",
    },
    discussion: [
      "The enclosure communicates parametric uncertainty in a way that a single point cannot: it represents a range of estimates rather than a specific value, which is the appropriate representation for a novel pathogen with limited early surveillance data.",
      "Direct labels for all comparator diseases minimize legend dependence in a chart where cross-disease comparison is the central analytical task. A legend would require back-and-forth lookup that would interrupt the comparative reading path.",
      "The directional axis annotations ('More deadly', 'Spreads faster') encode axis semantics in plain language at the chart's perimeter, allowing readers unfamiliar with the axes to orient themselves without reading the full axis titles.",
    ],
  },
  {
    id: "11_WP_LINE",
    file: "11_WP_LINE.png",
    paperFigure: "Fig. 2",
    title:
      "Hospitalizations and cases break records as the omicron wave continues",
    source: "WP",
    chart: "LINE",
    rationale:
      "Gray temporal highlighting applied to three distinct wave intervals, connector-linked text callouts with specific case numbers, and a multi-series line structure are coordinated to explain differences across pandemic waves.",
    strategies: ["S1", "S2", "S3", "S5"],
    annotationElements: [
      "Gray shading over three distinct periods labeled 'Jan. 2021 peak', 'Delta wave', and 'Omicron wave'.",
      "Connector-linked text callout anchored to the Jan. 2021 peak: case baseline (248,128 7-day average) and current comparison (761,081 cases, 307 percent of previous peak).",
      "Connector-linked text callout in the Omicron wave region explaining the mechanistic lag between case peaks and death/hospitalization peaks.",
      "Three series (Cases, Deaths, Hospitalizations) providing structural context for comparative wave analysis.",
    ],
    strategyEvidence: {
      S1: "The chart deploys a coordinated ensemble: temporal highlighting across three intervals, two connector-text callouts, numeric figures embedded in text, and multi-series line context. Each element contributes a distinct component of the wave comparison argument (§5.1).",
      S2: "Gray shading is applied to exactly three analytically meaningful intervals—the Jan. 2021 peak, the Delta wave, and the Omicron wave—while intervening periods remain unshaded. The scope of highlighting matches the article's comparative focus, consistent with §5.2.",
      S3: "Both text callouts are article-specific: the first provides quantitative baseline and comparison figures for the Jan. 2021 peak; the second explains the mechanistic lag between case peaks and deaths/hospitalizations. These are reporting-derived analytical facts, not chart-level descriptions (§5.3).",
      S5: "The text callouts embed specific numeric figures—248,128 and 761,081—that establish the quantitative magnitude of the wave comparison. These values function as numeric anchors for the percentage comparison argument: the '307 percent' figure requires both numbers to be known precisely (§5.5).",
    },
    discussion: [
      "Shading three separate intervals rather than one continuous region communicates the discrete, event-structured nature of the pandemic's wave pattern, distinguishing analytically meaningful peaks from intervening periods.",
      "The first callout establishes the Jan. 2021 reference values necessary for the second callout's percentage comparison. The two callouts work sequentially: the first provides the baseline, the second provides the comparison.",
      "Placing the second callout in the Omicron wave region before deaths and hospitalizations have risen communicates a forward-looking prediction rather than a retrospective description—annotation in service of future interpretation.",
    ],
  },
  {
    id: "24_NYT_BAR",
    file: "24_NYT_BAR.png",
    paperFigure: "Fig. 3",
    title: "Budget Cuts in the G.O.P. Plan",
    source: "NYT",
    chart: "BAR",
    rationale:
      "A dashed temporal divider, selective violet highlighting, and an in-chart text label separate proposed future cuts from baseline spending and reinforce the caption's claim about the magnitude of year-over-year reductions.",
    strategies: ["S1", "S2", "S3", "S4"],
    annotationElements: [
      "Dashed vertical line at 2023 marking the projection boundary, labeled 'Projected'.",
      "Violet highlighting on the upper portion of post-2023 bars representing proposed cuts above baseline spending.",
      "In-chart text label 'Proposed cuts' positioned within the highlighted region.",
      "Caption: 'The bill's caps on discretionary spending would result in larger and larger cuts each year, beginning with a 13 percent reduction in 2024.'",
    ],
    strategyEvidence: {
      S1: "The chart uses an ensemble of a temporal divider, selective color highlighting, and in-chart text to identify and explain the proposed-cut structure. The three elements work together to make the policy distinction between baseline spending and proposed reductions legible (§5.1).",
      S2: "Violet highlighting is applied exclusively to the argument-relevant portion of projected bars—the proposed cut amount above baseline spending—leaving the baseline gray. The selective coloring makes the cut magnitude visually legible as an additive quantity (§5.2).",
      S3: "The in-chart label 'Proposed cuts' identifies the highlighted region in policy terms rather than data terms. It communicates what the violet segment represents—a legislative proposal—rather than how it was computed (§5.3).",
      S4: "The caption's claim ('larger and larger cuts each year, beginning with a 13 percent reduction in 2024') is restated visually through the highlighted segments, which grow in size from 2024 to 2033. Caption and annotation communicate the same argument—escalating proposed reductions—through different channels (§5.4).",
    },
    discussion: [
      "The dashed vertical divider performs a temporal partitioning function: it separates historical observed data from projected policy-contingent data, establishing the epistemic distinction that makes the 'Proposed cuts' label interpretively coherent.",
      "The choice of violet for the cuts—distinct from the gray baseline bars—encodes the policy-contingent status of the highlighted region. Readers can infer from the color distinction alone that the highlighted portion represents a different category of value.",
      "The growing height of the violet segments from 2024 to 2033 encodes the caption's 'larger and larger' claim visually, making the directional trend in proposed cuts legible without numerical reading.",
    ],
  },
  {
    id: "67_ECO_LINE",
    file: "67_ECO_LINE.png",
    paperFigure: "Fig. 4",
    title: "United States, deaths of despair per 100,000 people",
    source: "ECO",
    chart: "LINE",
    rationale:
      "Vertical event markers, numbered connector-text callouts, a counterfactual trend line, and transitional shading are coordinated to explain two structural breaks in the deaths-of-despair time series and their divergence across demographic subgroups.",
    strategies: ["S1", "S2", "S3", "S4"],
    annotationElements: [
      "Vertical gray line at approximately 1982 marking the opioid epidemic's onset.",
      "Vertical gray line at approximately 1996–2000, labeled 'OxyContin painkiller introduced'.",
      "Numbered text callout 1: 'Deaths of despair were declining until the opioid epidemic hit.'",
      "Numbered text callout 2: 'The downward trend ended earlier among middle-aged whites.'",
      "Dashed 'Pre-1990s trend' line representing the counterfactual trajectory for the 'All' series.",
      "Gray shading over the transitional interval around the second structural break.",
      "Direct series labels 'Whites aged 45–64' and 'All' at the respective lines.",
    ],
    strategyEvidence: {
      S1: "The chart deploys a dense ensemble: vertical event markers, numbered text callouts, a counterfactual trend line, a transitional shading interval, and direct series labels. Each element contributes a distinct component of the structural-break explanation (§5.1).",
      S2: "Gray shading is applied to the transitional interval around 1995–2000 where the two series diverge—the article's central analytical event. The shading focuses attention on the divergence point without removing pre- and post-transition context (§5.2).",
      S3: "The numbered text callouts are fully article-specific: callout 1 identifies the opioid epidemic as the causal mechanism; callout 2 characterizes the differential demographic timing of the trend reversal. These are causal and comparative statements from the article's analysis, not descriptions of line direction (§5.3).",
      S4: "The overall annotation structure supports the article's two-part argument—that the opioid crisis caused a structural break, and that this break occurred earlier among middle-aged whites. The callout numbering, event markers, and counterfactual trend line all serve this unified claim, consistent with §5.4.",
    },
    discussion: [
      "The counterfactual trend line—labeled 'Pre-1990s trend' and extended beyond the 1990s as a dashed projection—enables the reader to evaluate the structural break against an expected trajectory. Without it, the divergence from what would have occurred is not visually quantifiable.",
      "Numbered callouts impose a reading order on the chart: the reader encounters the earlier structural break before the demographic divergence, following the article's causal sequence rather than a purely chronological one.",
      "The event marker labeled 'OxyContin painkiller introduced' provides causal identification for the second structural break, anchoring the demographic divergence to a specific historical event to which the article assigns causal significance.",
    ],
  },
];

// ─── State & Element References ───────────────────────────────────────────────

const state = {
  paperStrategy: new Set(),
  paperSource: new Set(),
  paperType: new Set(),
  lastFocusedElement: null,
  activeStrategyId: null,
  activeExampleId: null,
};

const THEME_KEY = "viscomm-theme";

const el = {
  heroStats: document.getElementById("heroStats"),
  strategyGrid: document.getElementById("strategyGrid"),
  paperStrategyFilters: document.getElementById("paperStrategyFilters"),
  paperSourceFilters: document.getElementById("paperSourceFilters"),
  paperTypeFilters: document.getElementById("paperTypeFilters"),
  clearFiltersBtn: document.getElementById("clearFiltersBtn"),
  paperStats: document.getElementById("paperStats"),
  paperGrid: document.getElementById("paperGrid"),
  overlay: document.getElementById("overlay"),
  drawer: document.getElementById("drawer"),
  drawerMeta: document.getElementById("drawerMeta"),
  drawerTitle: document.getElementById("drawerTitle"),
  drawerBody: document.getElementById("drawerBody"),
  drawerClose: document.getElementById("drawerClose"),
  bibtex: document.getElementById("bibtex"),
  copyBibtexBtn: document.getElementById("copyBibtexBtn"),
  copyBibtexMsg: document.getElementById("copyBibtexMsg"),
  themeToggle: document.getElementById("themeToggle"),
  backToTop: document.getElementById("backToTop"),
};

// ─── Active Card Tracking ───────────────────────────────────────────────────────

function setActiveCard(type, id) {
  document
    .querySelectorAll(".strategy-card.is-active, .paper-card.is-active")
    .forEach((c) => c.classList.remove("is-active"));
  if (type === "strategy" && id) {
    document
      .querySelector(`.strategy-card[data-sid="${id}"]`)
      ?.classList.add("is-active");
    state.activeStrategyId = id;
  } else if (type === "example" && id) {
    document
      .querySelector(`.paper-card[data-open-example="${id}"]`)
      ?.classList.add("is-active");
    state.activeExampleId = id;
  }
}

// ─── Drawer ───────────────────────────────────────────────────────────────────

function openDrawer(meta, title, contentHTML, triggerEl = null) {
  // Cancel any in-progress close animation
  el.drawer.classList.remove("is-closing");
  el.overlay.classList.remove("is-closing");

  state.lastFocusedElement = triggerEl || document.activeElement;
  el.drawerMeta.innerHTML = meta; // innerHTML: meta contains HTML entities
  el.drawerTitle.textContent = title;
  el.drawerBody.innerHTML = contentHTML;
  el.drawerBody.scrollTop = 0;
  el.overlay.hidden = false;
  el.drawer.hidden = false;
  document.body.classList.add("drawer-open");
  el.drawerClose.focus();
}

function closeDrawer() {
  el.drawer.classList.add("is-closing");
  el.overlay.classList.add("is-closing");
  setTimeout(() => {
    el.overlay.hidden = true;
    el.drawer.hidden = true;
    el.drawer.classList.remove("is-closing");
    el.overlay.classList.remove("is-closing");
    document.body.classList.remove("drawer-open");
    document
      .querySelectorAll(".strategy-card.is-active, .paper-card.is-active")
      .forEach((c) => c.classList.remove("is-active"));
    state.activeStrategyId = null;
    state.activeExampleId = null;
    if (state.lastFocusedElement?.focus) state.lastFocusedElement.focus();
  }, 230);
}

// ─── Theme (Dark default + Light toggle) ─────────────────────────────────────

function applyTheme(theme) {
  const resolved = theme === "light" ? "light" : "dark";
  document.body.classList.toggle("light", resolved === "light");
  document.body.classList.toggle("dark", resolved === "dark");
  if (el.themeToggle) {
    const isLight = resolved === "light";
    el.themeToggle.setAttribute("aria-checked", String(isLight));
    el.themeToggle.setAttribute(
      "aria-label",
      isLight ? "Switch to dark mode" : "Switch to light mode",
    );
  }
}

function initTheme() {
  let stored = null;
  try {
    stored = localStorage.getItem(THEME_KEY);
  } catch (e) {
    stored = null;
  }
  applyTheme(stored === "light" ? "light" : "dark");
}

function toggleTheme() {
  const next = document.body.classList.contains("light") ? "dark" : "light";
  applyTheme(next);
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch (e) {
    // no-op if storage is unavailable
  }
}

// ─── Filtering ────────────────────────────────────────────────────────────────

function filteredPaperExamples() {
  return PAPER_EXAMPLES.filter((d) => {
    if (
      state.paperStrategy.size &&
      !d.strategies.some((s) => state.paperStrategy.has(s))
    )
      return false;
    if (state.paperSource.size && !state.paperSource.has(d.source))
      return false;
    if (state.paperType.size && !state.paperType.has(d.chart)) return false;
    return true;
  });
}

// ─── Render: Hero Stats ───────────────────────────────────────────────────────

function renderHeroStats() {
  const stats = [
    { n: "72", l: "Professional static charts analyzed" },
    {
      n: "4",
      l: "News portals: The New York Times, The Washington Post, The Wall Street Journal, The Economist",
    },
    { n: "5", l: "Recurring annotation strategies" },
  ];
  el.heroStats.innerHTML = stats
    .map(
      (s) => `
      <article class="stat">
        <div class="stat__n">${s.n}</div>
        <div class="stat__l">${s.l}</div>
      </article>
    `,
    )
    .join("");
}

// ─── Render: Strategy Cards ───────────────────────────────────────────────────

function renderStrategyCards() {
  el.strategyGrid.innerHTML = STRATEGIES.map((s) => {
    const exCount = PAPER_EXAMPLES.filter((d) =>
      d.strategies.includes(s.id),
    ).length;
    return `
    <article class="strategy-card" data-sid="${s.id}" data-open-strategy="${s.id}" role="button" tabindex="0" aria-label="View full analysis for ${s.title}">
      <div class="strategy-card__top">
        <span class="strategy-id strategy-id--${s.id.toLowerCase()}">${s.id}</span>
        <span class="strategy-section">${s.paperSection}</span>
      </div>
      <h4>${s.title}</h4>
      <p>${s.summary}</p>
      <div class="card-implication">${s.implication}</div>
      <div class="card-foot">
        <span class="card-count">${exCount} example${exCount !== 1 ? "s" : ""}</span>
        <span class="card-cta" aria-hidden="true">View analysis &rarr;</span>
      </div>
    </article>
  `;
  }).join("");
}

// ─── Render: Filter Chips ─────────────────────────────────────────────────────

function renderChipRow(
  container,
  values,
  activeSet,
  formatter,
  onChange,
  getSid,
) {
  container.innerHTML = values
    .map((value) => {
      const on = activeSet.has(value);
      const sid = getSid ? getSid(value) : null;
      const sidAttr = sid ? ` data-sid="${sid}"` : "";
      return `<button class="chip ${on ? "is-on" : ""}" data-filter-value="${value}"${sidAttr} type="button">${formatter(value)}</button>`;
    })
    .join("");

  container.querySelectorAll("[data-filter-value]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.filterValue;
      if (activeSet.has(value)) activeSet.delete(value);
      else activeSet.add(value);
      onChange();
    });
  });
}

function renderPaperFilters() {
  renderChipRow(
    el.paperStrategyFilters,
    STRATEGIES.map((s) => s.id),
    state.paperStrategy,
    (v) => v,
    renderPaperSection,
    (v) => v, // pass SID for strategy chips
  );
  renderChipRow(
    el.paperSourceFilters,
    Object.keys(SOURCE_LABELS),
    state.paperSource,
    (v) => v,
    renderPaperSection,
    null,
  );
  renderChipRow(
    el.paperTypeFilters,
    Object.keys(CHART_LABELS),
    state.paperType,
    (v) => CHART_LABELS[v],
    renderPaperSection,
    null,
  );
}

// ─── Render: Paper Grid ───────────────────────────────────────────────────────

function renderPaperSection() {
  renderPaperFilters();
  const data = filteredPaperExamples();
  const hasActiveFilters =
    state.paperStrategy.size > 0 ||
    state.paperSource.size > 0 ||
    state.paperType.size > 0;

  if (el.clearFiltersBtn) {
    el.clearFiltersBtn.disabled = !hasActiveFilters;
    el.clearFiltersBtn.textContent = hasActiveFilters
      ? "Clear all filters"
      : "No filters selected";
  }

  el.paperStats.textContent = `${data.length} of ${PAPER_EXAMPLES.length} examples shown`;

  el.paperGrid.innerHTML = data
    .map((d) => {
      const strategyPills = d.strategies
        .map((sid) => {
          const highlight =
            state.paperStrategy.size > 0 && state.paperStrategy.has(sid);
          const dim = state.paperStrategy.size > 0 && !highlight;
          const classes = [
            "pill",
            `pill--${sid.toLowerCase()}`,
            highlight ? "pill--highlight" : "",
            dim ? "pill--dim" : "",
          ]
            .filter(Boolean)
            .join(" ");
          const label = highlight ? `&#10003;\u00A0${sid}` : sid;
          return `<span class="${classes}" data-sid="${sid}">${label}</span>`;
        })
        .join("");
      return `
        <article class="paper-card" data-open-example="${d.id}" role="button" tabindex="0" aria-label="View analysis: ${d.title}">
          <div class="paper-thumb">
            <span class="paper-figure-tag">${d.paperFigure}</span>
            <img src="professional-vis-examples/${d.file}" alt="${d.title}" loading="lazy" />
            <div class="paper-strats-overlay">${strategyPills}</div>
          </div>
          <div class="paper-body">
            <h4 class="paper-title">${d.title}</h4>
            <p class="paper-source">${SOURCE_LABELS[d.source]} &middot; ${CHART_LABELS[d.chart]}</p>
            <p class="paper-rationale">${d.rationale}</p>
            <span class="card-cta" aria-hidden="true">See analysis &rarr;</span>
          </div>
        </article>
      `;
    })
    .join("");
}

// ─── Strategy Drawer ─────────────────────────────────────────────────────────

function openStrategyDrawer(strategyId, triggerEl) {
  const strategy = STRATEGIES.find((s) => s.id === strategyId);
  if (!strategy) return;
  const ex = PAPER_EXAMPLES.find((d) => d.id === strategy.exampleId);
  if (!ex) return;

  const stratIdx = STRATEGIES.findIndex((s) => s.id === strategyId);
  const prevS = stratIdx > 0 ? STRATEGIES[stratIdx - 1] : null;
  const nextS =
    stratIdx < STRATEGIES.length - 1 ? STRATEGIES[stratIdx + 1] : null;
  const exCount = PAPER_EXAMPLES.filter((d) =>
    d.strategies.includes(strategyId),
  ).length;

  const discussionItems = strategy.detail
    .map((p) => {
      const firstSent =
        p.match(/^[\s\S]+?[.!?](?=\s|$)/)?.[0] ?? p.slice(0, 130) + "\u2026";
      const rest = p.slice(firstSent.length).trim();
      if (!rest) return `<li>${p}</li>`;
      return `<li><details class="drawer-detail"><summary>${firstSent}</summary><p class="drawer-detail__body">${rest}</p></details></li>`;
    })
    .join("");
  const annotationItems = ex.annotationElements
    .map((item) => `<li>${item}</li>`)
    .join("");

  const navHTML = `
    <div class="drawer-nav">
      <button class="drawer-nav__btn" type="button" ${prevS ? `data-open-strategy="${prevS.id}"` : "disabled"} aria-label="${prevS ? `Previous: ${prevS.id} ${prevS.title}` : "No previous strategy"}">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
        <span>${prevS ? prevS.id : "—"}</span>
      </button>
      <span class="drawer-nav__pos">${stratIdx + 1} <span class="drawer-nav__sep">/</span> ${STRATEGIES.length} strategies</span>
      <button class="drawer-nav__btn drawer-nav__btn--right" type="button" ${nextS ? `data-open-strategy="${nextS.id}"` : "disabled"} aria-label="${nextS ? `Next: ${nextS.id} ${nextS.title}` : "No next strategy"}">
        <span>${nextS ? nextS.id : "—"}</span>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
    <p class="drawer-nav__hint" aria-hidden="true">← → arrow keys to navigate</p>
  `;

  openDrawer(
    `Strategy ${strategy.id} &nbsp;&middot;&nbsp; ${strategy.paperSection}`,
    strategy.title,
    `
      ${navHTML}
      <div class="drawer-summary-grid">
        <div class="drawer-section drawer-section--lead">
          <p class="drawer-lead-text">${strategy.summary}</p>
        </div>

        <div class="drawer-section drawer-section--implication">
          <div class="drawer-sec-label">Design Implication</div>
          <p class="drawer-implication-text">${strategy.implication}</p>
        </div>
      </div>

      <div class="drawer-section">
        <div class="drawer-sec-header">
          <div class="drawer-sec-label">Research Discussion <span class="drawer-sec-count">${strategy.detail.length}</span></div>
          <button class="drawer-expand-toggle" type="button">Expand all</button>
        </div>
        <ol class="drawer-disc-list drawer-disc-list--split">${discussionItems}</ol>
      </div>

      <div class="drawer-section">
        <div class="drawer-sec-label">Representative Example</div>
        <div class="drawer-example-grid">
          <div>
            <div class="drawer-img-wrap">
              <img src="professional-vis-examples/${ex.file}" alt="${ex.title}" class="drawer-img" />
            </div>
            <div class="drawer-example-meta">
              <span class="pill pill--${strategy.id.toLowerCase()}">${strategy.id}</span>
              <strong>${ex.paperFigure}</strong> &mdash; ${ex.title}
            </div>
            <p class="drawer-sub">${strategy.indexArgument}</p>
          </div>

          <div class="drawer-example-side">
            <div class="drawer-sec-label">Annotation Elements</div>
            <ol class="drawer-anno-list">${annotationItems}</ol>
          </div>
        </div>

        <div class="drawer-links drawer-links--tight">
          <button type="button" class="drawer-link" data-open-example="${ex.id}">See Full Figure Analysis &rarr;</button>
        </div>
      </div>

      <div class="drawer-jump">
        <button class="btn btn--compact" type="button" data-goto-examples="${strategyId}">
          Explore all ${exCount} example${exCount !== 1 ? "s" : ""} for ${strategyId} &darr;
        </button>
      </div>
    `,
    triggerEl,
  );
  setActiveCard("strategy", strategyId);
}

// ─── Figure Drawer ────────────────────────────────────────────────────────────

function openFigureDrawer(exampleId, triggerEl) {
  const figure = PAPER_EXAMPLES.find((d) => d.id === exampleId);
  if (!figure) return;

  // Navigation context: prefer currently filtered set, fall back to all
  const visibleExamples = filteredPaperExamples();
  let navSet = visibleExamples;
  let navIdx = visibleExamples.findIndex((d) => d.id === exampleId);
  if (navIdx < 0) {
    navSet = PAPER_EXAMPLES;
    navIdx = PAPER_EXAMPLES.findIndex((d) => d.id === exampleId);
  }
  const prevEx = navIdx > 0 ? navSet[navIdx - 1] : null;
  const nextEx = navIdx < navSet.length - 1 ? navSet[navIdx + 1] : null;
  const isFiltered =
    navSet === visibleExamples &&
    visibleExamples.length < PAPER_EXAMPLES.length;

  const strategyPillsRow = figure.strategies
    .map((sid) => `<span class="pill pill--${sid.toLowerCase()}">${sid}</span>`)
    .join("");

  const annotationItems = figure.annotationElements
    .map((d) => `<li>${d}</li>`)
    .join("");

  const discussionItems = figure.discussion
    .map((p) => {
      const firstSent =
        p.match(/^[\s\S]+?[.!?](?=\s|$)/)?.[0] ?? p.slice(0, 130) + "\u2026";
      const rest = p.slice(firstSent.length).trim();
      if (!rest) return `<li>${p}</li>`;
      return `<li><details class="drawer-detail"><summary>${firstSent}</summary><p class="drawer-detail__body">${rest}</p></details></li>`;
    })
    .join("");

  const mappingBlocks = figure.strategies
    .map((sid) => {
      const strategy = STRATEGIES.find((s) => s.id === sid);
      const title = strategy ? strategy.title : sid;
      const reason = figure.strategyEvidence[sid] || "";
      return `
        <div class="mapping-block" data-sid="${sid}">
          <div class="mapping-block__head">
            <span class="pill pill--${sid.toLowerCase()}">${sid}</span>
            <strong>${title}</strong>
          </div>
          <p>${reason}</p>
        </div>
      `;
    })
    .join("");

  const strategyLinks = figure.strategies
    .map((sid) => {
      const s = STRATEGIES.find((s) => s.id === sid);
      return `<button type="button" class="drawer-link" data-open-strategy="${sid}">${sid}: ${s ? s.title : sid}</button>`;
    })
    .join("");

  const figNavHTML = `
    <div class="drawer-nav">
      <button class="drawer-nav__btn" type="button" ${prevEx ? `data-open-example="${prevEx.id}"` : "disabled"} aria-label="${prevEx ? `Previous: ${prevEx.paperFigure} ${prevEx.title}` : "No previous"}">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
        <span>${prevEx ? prevEx.paperFigure : "—"}</span>
      </button>
      <span class="drawer-nav__pos">${navIdx + 1} <span class="drawer-nav__sep">/</span> ${navSet.length}${isFiltered ? ` <span class="drawer-nav__filtered">filtered</span>` : " examples"}</span>
      <button class="drawer-nav__btn drawer-nav__btn--right" type="button" ${nextEx ? `data-open-example="${nextEx.id}"` : "disabled"} aria-label="${nextEx ? `Next: ${nextEx.paperFigure} ${nextEx.title}` : "No next"}">
        <span>${nextEx ? nextEx.paperFigure : "—"}</span>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
    <p class="drawer-nav__hint" aria-hidden="true">← → arrow keys to navigate</p>
  `;

  openDrawer(
    `${figure.paperFigure} &nbsp;&middot;&nbsp; ${SOURCE_LABELS[figure.source]} &nbsp;&middot;&nbsp; ${CHART_LABELS[figure.chart]}`,
    figure.title,
    `
      ${figNavHTML}
      <div class="drawer-top-grid">
        <div class="drawer-img-wrap">
          <img src="professional-vis-examples/${figure.file}" alt="${figure.title}" class="drawer-img" />
        </div>

        <div class="drawer-section drawer-section--lead drawer-section--compact">
          <div class="drawer-fig-meta-row">
            <div class="drawer-fig-pills">${strategyPillsRow}</div>
          </div>
          <p class="drawer-lead-text">${figure.rationale}</p>
        </div>
      </div>

      <div class="drawer-2col">
        <div class="drawer-section">
          <div class="drawer-sec-label">Observed Annotations</div>
          <ol class="drawer-anno-list">${annotationItems}</ol>
        </div>
        <div class="drawer-section">
          <div class="drawer-sec-label">Strategy Mappings</div>
          ${mappingBlocks}
        </div>
      </div>

      <div class="drawer-section">
        <div class="drawer-sec-header">
          <div class="drawer-sec-label">Discussion <span class="drawer-sec-count">${figure.discussion.length}</span></div>
          <button class="drawer-expand-toggle" type="button">Expand all</button>
        </div>
        <ol class="drawer-disc-list">${discussionItems}</ol>
      </div>

      <div class="drawer-section">
        <div class="drawer-sec-label">Explore Related Strategies</div>
        <div class="drawer-links">${strategyLinks}</div>
      </div>
    `,
    triggerEl,
  );
  setActiveCard("example", exampleId);
}

// ─── Copy BibTeX ──────────────────────────────────────────────────────────────

function copyBibtex() {
  const text = el.bibtex ? el.bibtex.textContent.trim() : "";
  if (!text) return;

  const onSuccess = () => {
    el.copyBibtexBtn.textContent = "Copied";
    window.setTimeout(() => {
      el.copyBibtexBtn.textContent = "Copy BibTeX";
      if (el.copyBibtexMsg) el.copyBibtexMsg.textContent = "";
    }, 2000);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then(onSuccess)
      .catch(() => {
        if (el.copyBibtexMsg)
          el.copyBibtexMsg.textContent = "Unable to copy automatically.";
      });
    return;
  }

  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.cssText = "position:absolute;left:-9999px;top:0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    onSuccess();
  } catch (e) {
    if (el.copyBibtexMsg)
      el.copyBibtexMsg.textContent = "Unable to copy automatically.";
  }
  document.body.removeChild(ta);
}

// ─── Event Binding ────────────────────────────────────────────────────────────

function bindEvents() {
  document.addEventListener("click", (evt) => {
    // ── Image zoom lightbox ──────────────────────────────────────────────────
    if (evt.target.matches(".drawer-img")) {
      const img = evt.target;
      const lb = document.createElement("div");
      lb.className = "img-lightbox";
      lb.setAttribute("role", "dialog");
      lb.setAttribute("aria-modal", "true");
      lb.setAttribute("aria-label", `Enlarged: ${img.alt}`);
      const closeBtn = document.createElement("button");
      closeBtn.className = "img-lightbox__close";
      closeBtn.type = "button";
      closeBtn.setAttribute("aria-label", "Close enlarged image");
      closeBtn.textContent = "\u00D7";
      const inner = document.createElement("div");
      inner.className = "img-lightbox__inner";
      const lbImg = document.createElement("img");
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      inner.appendChild(lbImg);
      inner.appendChild(closeBtn);
      lb.appendChild(inner);
      document.body.appendChild(lb);
      const close = () => {
        lb.remove();
        document.removeEventListener("keydown", onKey);
      };
      lb.addEventListener("click", (e) => {
        if (e.target === lb || e.target === closeBtn) close();
      });
      const onKey = (e) => {
        if (e.key === "Escape") close();
      };
      document.addEventListener("keydown", onKey);
      closeBtn.focus();
      return;
    }

    // ── Expand / collapse discussion items ───────────────────────────────────
    const expandToggle = evt.target.closest(".drawer-expand-toggle");
    if (expandToggle) {
      const section = expandToggle.closest(".drawer-section");
      if (section) {
        const allDetails = section.querySelectorAll("details.drawer-detail");
        const anyOpen = [...allDetails].some((d) => d.open);
        allDetails.forEach((d) => {
          d.open = !anyOpen;
        });
        expandToggle.textContent = anyOpen ? "Expand all" : "Collapse all";
      }
      return;
    }

    const strategyBtn = evt.target.closest("[data-open-strategy]");
    if (strategyBtn) {
      openStrategyDrawer(strategyBtn.dataset.openStrategy, strategyBtn);
      return;
    }
    const exampleBtn = evt.target.closest("[data-open-example]");
    if (exampleBtn) {
      openFigureDrawer(exampleBtn.dataset.openExample, exampleBtn);
      return;
    }
    const gotoBtn = evt.target.closest("[data-goto-examples]");
    if (gotoBtn) {
      const sid = gotoBtn.dataset.gotoExamples;
      closeDrawer();
      setTimeout(() => {
        state.paperStrategy.clear();
        if (sid) state.paperStrategy.add(sid);
        renderPaperSection();
        document
          .getElementById("examples")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 260);
    }
  });

  el.overlay.addEventListener("click", closeDrawer);
  el.drawerClose.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape" && !el.drawer.hidden) {
      closeDrawer();
      return;
    }
    if (evt.key === "Enter" || evt.key === " ") {
      const stratCard = evt.target.closest(
        ".strategy-card[data-open-strategy]",
      );
      if (stratCard) {
        evt.preventDefault();
        openStrategyDrawer(stratCard.dataset.openStrategy, stratCard);
        return;
      }
      const paperCard = evt.target.closest(".paper-card[data-open-example]");
      if (paperCard) {
        evt.preventDefault();
        openFigureDrawer(paperCard.dataset.openExample, paperCard);
      }
    }
  });

  if (el.copyBibtexBtn) {
    el.copyBibtexBtn.addEventListener("click", copyBibtex);
  }
  if (el.clearFiltersBtn) {
    el.clearFiltersBtn.addEventListener("click", () => {
      state.paperStrategy.clear();
      state.paperSource.clear();
      state.paperType.clear();
      renderPaperSection();
    });
  }
  if (el.themeToggle) {
    el.themeToggle.addEventListener("click", toggleTheme);
  }

  // Arrow-key drawer navigation (only when drawer is open, not in text inputs)
  document.addEventListener("keydown", (evt) => {
    if (el.drawer.hidden) return;
    if (evt.key !== "ArrowLeft" && evt.key !== "ArrowRight") return;
    if (document.activeElement?.matches("input, textarea, [contenteditable]"))
      return;
    evt.preventDefault();
    if (evt.key === "ArrowLeft") {
      const btn = el.drawer.querySelector(
        ".drawer-nav__btn:not(.drawer-nav__btn--right):not([disabled])",
      );
      btn?.click();
    } else {
      const btn = el.drawer.querySelector(
        ".drawer-nav__btn.drawer-nav__btn--right:not([disabled])",
      );
      btn?.click();
    }
  });
}

// ─── Scroll Reveal ────────────────────────────────────────────────────────────

function initRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-in");
      });
    },
    { threshold: 0.08 },
  );
  document.querySelectorAll(".reveal").forEach((n) => observer.observe(n));
}

// ─── Dynamic Header Height (fix filter sticky offset) ────────────────────────

function initHeaderHeightObserver() {
  const topEl = document.querySelector(".top");
  if (!topEl) return;
  const update = () => {
    document.documentElement.style.setProperty(
      "--header-h",
      topEl.offsetHeight + "px",
    );
  };
  update();
  if ("ResizeObserver" in window) {
    new ResizeObserver(update).observe(topEl);
  }
}

// ─── Scroll Spy (active nav link) ────────────────────────────────────────────

function initScrollSpy() {
  const navLinks = document.querySelectorAll('.top__nav a[href^="#"]');
  if (!navLinks.length) return;
  const sections = [...navLinks]
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if (!sections.length) return;

  function getSectionTop(section) {
    const rect = section.getBoundingClientRect();
    return Math.abs(rect.top - (window.innerWidth < 700 ? 56 : 80)); // account for header height
  }

  function updateActiveNav() {
    let minDist = Infinity;
    let activeIdx = 0;
    sections.forEach((section, i) => {
      const dist = getSectionTop(section);
      if (dist < minDist) {
        minDist = dist;
        activeIdx = i;
      }
    });
    navLinks.forEach((a, i) =>
      a.classList.toggle("is-active", i === activeIdx),
    );
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  window.addEventListener("resize", updateActiveNav);
  updateActiveNav();
}

// ─── Back to Top ─────────────────────────────────────────────────────────────

function initBackToTop() {
  if (!el.backToTop) return;
  window.addEventListener(
    "scroll",
    () => {
      el.backToTop.classList.toggle("is-visible", window.scrollY > 420);
    },
    { passive: true },
  );
  el.backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────

function init() {
  initTheme();
  renderHeroStats();
  renderStrategyCards();
  renderPaperSection();
  bindEvents();
  initRevealObserver();
  initHeaderHeightObserver();
  initScrollSpy();
  initBackToTop();
}

init();
