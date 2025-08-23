<?php $uniqueId3 = $layout_id . get_row_index(); ?>
<div id="chart<?php echo $uniqueId3; ?>" class="p-2" style="height:460px"></div>
<script defer>
document.addEventListener('DOMContentLoaded', function() {
var chartDom = document.getElementById('chart<?php echo $uniqueId3; ?>');
var myChart = echarts.init(chartDom);
var option;

option = {
  xAxis: {
    type: 'category',
    data: [<?php
          if (have_rows('chart_repeater')):
              $items = [];
              while (have_rows('chart_repeater')): the_row();
                  $data = get_sub_field('data_title');

                  // Escape backslashes first, then single quotes
                  $data_safe = str_replace(["\\", "'"], ["\\\\", "\\'"], $data);

                  $items[] = "'" . $data_safe . "'";
              endwhile;
              echo implode(',', $items);
          endif;
          ?>]
  },
  yAxis: {
    type: 'value'
  },
 
  series: [
    {
data:[<?php
if (have_rows('chart_repeater')):
    $items = [];
    while (have_rows('chart_repeater')): the_row();
        $n = get_sub_field('numbers');
        $c = get_sub_field('segment_color');
        $items[] = "{ value:" . $n . ", itemStyle: { color: '" . $c . "' } }";
    endwhile;
    echo implode(',', $items);
endif;
?>],
      type: 'bar'
    }
  ]
};

option && myChart.setOption(option);
 });
</script>
